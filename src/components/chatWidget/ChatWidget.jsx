"use client";

import React, { useState, useEffect, useRef } from "react";
import {createRoot} from "react-dom/client"
import "./chat-widget.css";
import ChatInput from "../chatInput/ChatInput";
import ChatMessages from "../chatMessages/ChatMessages";
import ChatHeader from "../chatHeader/ChatHeader";
import { URLS } from "@/utils/generalUrls";
import axios from "axios";
import { socket } from "@/config/socket";
import ChatTrigger from "../chatTrigger/ChatTrigger";
import useChatTriggers from "@/hooks/useChatTriggers";
// const apiKey =
//   "fa4960a7c6d03307f4f3b260a318bda1140cb4e368cca4ab4ccfe9176feab536";
export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [currentAgent, setCurrentAgent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [showTrigger, setShowTrigger] = useState(false)
  const [currentTrigger, setCurrentTrigger] = useState(null)
  const [widgetSettings, setWidgetSettings] = useState(null);
  const widgetRef = useRef(null);
  const inputRef = useRef(null);
  useChatTriggers(apiKey, () => setIsOpen(true), sessionId);
  // Example trigger messages
  const triggerMessages = [
    {
      message: "Hello! How can I help you? This specific thing needs to be added to your account.",
      agentName: "Beth from Crisp",
      agentAvatar: "/placeholder.svg?height=40&width=40",
      condition: { type: "time", value: 5 }, // Show after 5 seconds
    },
    {
      message: "I noticed you're looking at our pricing. Need help choosing a plan?",
      agentName: "Beth from Crisp",
      agentAvatar: "/placeholder.svg?height=40&width=40",
      condition: { type: "scroll", value: 50 }, // Show at 50% scroll
    },
  ]

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
    socket.on("trigger-message", onReceiveTriggerMessage)
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

  // useEffect(() => {
  //   if (isOpen || showTrigger) return

  //   // Time-based triggers
  //   const timeBasedTriggers = triggerMessages.filter((t) => t.condition.type === "time")
  //   timeBasedTriggers.forEach((trigger) => {
  //     const timer = setTimeout(() => {
  //       if (!isOpen && !showTrigger) {
  //         setCurrentTrigger(trigger)
  //         setShowTrigger(true)
  //       }
  //     }, trigger.condition.value * 1000)

  //     return () => clearTimeout(timer)
  //   })
  // }, [isOpen, showTrigger, triggerMessages])

  const onReceiveTriggerMessage = (message, trigger) => {
    setMessages((prev) => [...prev, message]);
    setCurrentTrigger(trigger);
    setShowTrigger(true)
  }

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

  const sendMessage = async (content, type, mediaUrl) => {
    if ((type === "text" && !content.trim()) || (type !== "text" && !mediaUrl)) return
    // Add message to local state immediately
    const newMessage = {
      id: Date.now().toString(),
      sender: "customer",
      content: type === "text" ? content : mediaUrl,
      contentType: type,
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
      if(type === "text") {
        data.append("content", content);
      }else if (type === "image" && mediaUrl) {
        // For image, we need to convert the data URL to a Blob
        if (mediaUrl.startsWith('data:image')) {
          const blob = await fetch(mediaUrl).then(r => r.blob())
          data.append("file", blob, "image.jpg")
        } else {
          data.append("file", mediaUrl)
        }
      } else if (type === "audio" && mediaUrl) {
        // For audio from recorder, we already have a Blob URL
        if (mediaUrl.startsWith('blob:')) {
          const blob = await fetch(mediaUrl).then(r => r.blob())
          data.append("file", blob, "audio.webm")
        } else {
          data.append("file", mediaUrl)
        }
      }
      data.append("contentType", type);
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
  // const sendAttachment = async (file, type) => {
  //   if (!input.trim()) return;
  //   // Add message to local state immediately
  //   const newMessage = {
  //     id: Date.now().toString(),
  //     sender: "customer",
  //     contentType: type,
  //     content: file,
  //     status: "sending", // Add status field
  //   };
  //   setMessages((prev) => [...prev, newMessage]);
  //   try {
  //     console.log("Sending messages");
  //     const data = new FormData();
  //     data.append("businessId", 1);
  //     if (userEmail) {
  //       data.append("customerEmail", userEmail);
  //     }
  //     data.append("sessionId", sessionId);
  //     data.append("sender", "customer");
  //     data.append("file", file);
  //     data.append("contentType", type);
  //     const response = await axios.post(
  //       `${URLS.baseUrl}/messages-service/send-message`,
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     // Update message status to sent
  //     setMessages((prev) =>
  //       prev.map((msg) =>
  //         msg.id === newMessage.id ? { ...msg, status: "sent" } : msg
  //       )
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     setMessages((prev) =>
  //       prev.map((msg) =>
  //         msg.id === newMessage.id ? { ...msg, status: "error" } : msg
  //       )
  //     );
  //     console.log(err);
  //   }
  // };

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

  const handleTriggerContinue = () => {
    setShowTrigger(false)
    setIsOpen(true)

    // Add the trigger message to the chat
    if (currentTrigger) {
      // const newMessage = {
      //   id: messages.length + 1,
      //   sender: "agent",
      //   senderName: currentTrigger.agentName,
      //   content: currentTrigger.message,
      //   timestamp: new Date(),
      //   avatar: currentTrigger.agentAvatar,
      //   type: "text",
      // }
      // setMessages((prev) => [...prev, newMessage])
    }
  }

  const handleTriggerClose = () => {
    setShowTrigger(false)
  }

  if (!widgetSettings) return null;

  return (
    <>
    {showTrigger && currentTrigger && !isOpen && (
        <ChatTrigger
          message={currentTrigger.message}
          agentName={currentTrigger.agentName}
          agentAvatar={currentTrigger.agentAvatar}
          onContinue={handleTriggerContinue}
          onClose={handleTriggerClose}
        />
      )}
  
      {/* Chat button (visible when widget is closed) */}
      {!isOpen && (
        <button
          className="chat-widget-button"
          onClick={toggleWidget}
          aria-label="Open chat widget"
        >
          {/* <MessageSquare /> */}
          <img src={`${URLS.assetsUrl}/public/app_logo.png`} style={{
            width: "30px",
            width: "30px",
          }} />
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
            avatar={currentAgent?.avatar ?? widgetSettings?.avatarUrl}
            senderName={widgetSettings.businessName}
            colorScheme={widgetSettings.colorScheme}
          />
          <ChatInput
            onSendMessage={sendMessage} inputRef={inputRef}
          />
        </div>
      )}
    </>
  );
}

// Mount the widget inside a dynamically created div
const root = document.createElement("div");
document.body.appendChild(root);
const r = createRoot(root);
r.render(React.createElement(ChatWidget, null));

