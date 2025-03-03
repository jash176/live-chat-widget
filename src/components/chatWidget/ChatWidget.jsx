"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare } from "lucide-react";
import "./chat-widget.css";
import ChatInput from "../chatInput/ChatInput";
import ChatMessages from "../chatMessages/ChatMessages";
import ChatHeader from "../chatHeader/ChatHeader";
import { URLS } from "@/utils/generalUrls";
import axios from "axios";
import { socket } from "@/config/socket";
const apiKey =
  "20c1aaec2416da02e32fd4e557ad2b52c2e9a8c845e6faacafab318503d2c4d4";
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [currentAgent, setCurrentAgent] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: Date.now().toString(),
      sender: "business",
      content: "Hello! How may I assist you today?",
      contentType: "text",
    },
  ]);

  const [widgetSettings, setWidgetSettings] = useState(null);
  const widgetRef = useRef(null);
  const inputRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    getWidgetSettings();
    const deviceId = getOrCreateDeviceId();
    setSessionId(deviceId);
    getUserMessages(deviceId);
    socket.connect();
    socket.emit("join-room", deviceId);
    socket.on("receiveMessage", onReceiveMessage);
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle visibility when keyboard appears on mobile
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && inputRef.current && widgetRef.current) {
        // Scroll to the input when keyboard appears
        setTimeout(() => {
          inputRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  // Generate or fetch deviceId from localStorage
  const getOrCreateDeviceId = () => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = `device_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  };

  const getUserMessages = async (sessionId) => {
    console.log("Fetching user messages...");
    try {
      const response = await axios.get(
        `${URLS.baseUrl}/messages-service/fetch-customer-messages`,
        {
          params: {
            apiKey,
            sessionId,
          },
        }
      );
      console.log(response.data.data);
      if (response.data.data.currentAgent) {
        setCurrentAgent(response.data.data.currentAgent);
      }
      setMessages(response.data.data.messages);
    } catch (error) {
      setMessages([]);
      console.error("Error fetching user messages:", error);
    }
  };

  const onReceiveMessage = (data) => {
    console.log("Received message:", data);
    setMessages((prev) => [...prev, data]);
    // Add message to the chat container
  };

  const sendMessage = async (input) => {
    if (!input.trim()) return;
    // Add message to local state immediately
    const newMessage = {
      id: Date.now().toString(),
      sender: "customer",
      content: input,
      contentType: "text",
      status: "sending", // Add status field
    };
    setMessages((prev) => [...prev, newMessage]);
    try {
      console.log("Sending messages");
      const data = new FormData();
      data.append("businessId", 1);
      if (userEmail) {
        data.append("customerEmail", userEmail);
      }
      data.append("sessionId", sessionId);
      data.append("sender", "customer");
      data.append("content", input);
      data.append("contentType", "text");
      const response = await axios.post(
        `${URLS.baseUrl}/messages-service/send-message`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Update message status to sent
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "sent" } : msg
        )
      );
      console.log(response.data);
    } catch (err) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, status: "error" } : msg
        )
      );
      console.log(err);
    }
  };

  const getWidgetSettings = async () => {
    try {
      const data = {
        apiKey,
      };
      const response = await axios.get(`${URLS.baseUrl}/widget-service/get`, {
        params: data,
      });
      setWidgetSettings(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching widget settings:", error);
    }
  };

  if (!widgetSettings) return null;

  return (
    <>
      {/* Chat button (visible when widget is closed) */}
      {!isOpen && (
        <button
          className="chat-widget-button"
          onClick={toggleWidget}
          aria-label="Open chat widget"
        >
          <MessageSquare />
        </button>
      )}

      {/* Main chat widget */}
      {isOpen && (
        <div
          ref={widgetRef}
          className={`chat-widget-container ${isMobile ? "mobile" : ""}`}
        >
          <ChatHeader
            onClose={toggleWidget}
            colorScheme={widgetSettings.colorScheme}
            currentAgent={currentAgent}
            businessInfo={widgetSettings}
          />
          <ChatMessages
            messages={messages}
            avatar={currentAgent.avatar ?? widgetSettings.avatarUrl}
            senderName={widgetSettings.businessName}
            colorScheme={widgetSettings.colorScheme}
          />
          <ChatInput
            onSendMessage={sendMessage}
            inputRef={inputRef}
            onSendAudio={() => {}}
          />
        </div>
      )}
    </>
  );
}

// Mount the widget inside a dynamically created div
function mountChatWidget() {
  let widgetContainer = document.getElementById("chat-widget-container");
  if (!widgetContainer) {
    widgetContainer = document.createElement("div");
    widgetContainer.id = "chat-widget-container";
    document.body.appendChild(widgetContainer);
  }
  createRoot(widgetContainer).render(<ChatWidget />);
}

// Attach function to window so it can be triggered externally
window.ChatWidget = { mount: mountChatWidget };
