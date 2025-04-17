"use client";

import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
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
  const [showTrigger, setShowTrigger] = useState(false);
  const [currentTrigger, setCurrentTrigger] = useState(null);
  const [widgetSettings, setWidgetSettings] = useState(null);
  const [businessId, setBusinessId] = useState(""); // New state for dynamic businessId
  const widgetRef = useRef(null);
  const inputRef = useRef(null);
  useChatTriggers(apiKey, () => setIsOpen(true), sessionId);

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
    // Only emit socket events if businessId is available
    socket.emit("join-room", deviceId);
    socket.on("receiveMessage", onReceiveMessage);
    socket.on("trigger-message", onReceiveTriggerMessage);

    sendMetaData(deviceId);
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

  const getSystemInfo = async () => {
    const ua = navigator.userAgent;

    const browserRegex = /(chrome|safari|firefox|edge|opera(?=\/))\/?\s*(\d+)/i;
    const match = ua.match(browserRegex);

    let systemInfo = {
      osName: "unknown",
      browserName: match ? match[1] : "unknown",
      browserVersion: match ? match[2] : "unknown",
      userAgent: ua,
      engineName: "unknown",
      engineVersion: "unknown",
    };

    // Check if User-Agent Client Hints API is supported
    if (navigator.userAgentData) {
      try {
        const uaData = await navigator.userAgentData.getHighEntropyValues([
          "platform",
          "platformVersion",
        ]);
        systemInfo.osName = uaData.platform;
        systemInfo.engineVersion = uaData.platformVersion;
      } catch (error) {
        console.warn("Error fetching User-Agent Data:", error);
      }
    }
    return systemInfo;
  };

  const sendMetaData = async (deviceId) => {
    try {
      // Fetch geolocation data from geo.js API
      const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
      const geoData = await response.json();

      // Get system info
      const systemInfo = await getSystemInfo();

      const metaData = {
        sessionId: deviceId,
        geolocation: {
          latitude: geoData.latitude || "unknown",
          longitude: geoData.longitude || "unknown",
          city: geoData.city || "unknown",
          country: geoData.country || "unknown",
          ip: geoData.ip || "unknown",
          region: geoData.region || "unkown",
          countryCode: geoData.country_code || "unknown",
        },
        system: systemInfo,
      };

      socket.emit("update_session_meta", metaData);
    } catch (error) {
      console.error("Error fetching geolocation data:", error);

      // If geolocation API fails, send system info only
      const metaData = {
        sessionId: deviceId,
        system: await getSystemInfo(),
      };
      socket.emit("update_session_meta", metaData);
    }
  };

  const onReceiveTriggerMessage = (message, trigger) => {
    setMessages((prev) => [...prev, message]);
    setCurrentTrigger(trigger);
    setShowTrigger(true);
  };

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
      if (response.data.data.customerEmail) {
        localStorage.setItem("userEmail", response.data.data.customerEmail);
      }
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
    setCurrentTrigger(data);
    setShowTrigger(true);
    // Add message to the chat container
  };

  const sendMessage = async (content, type, mediaUrl) => {
    if ((type === "text" && !content.trim()) || (type !== "text" && !mediaUrl))
      return;
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
      data.append("businessId", businessId);
      if (userEmail) {
        data.append("customerEmail", userEmail);
      }
      data.append("sessionId", sessionId);
      data.append("sender", "customer");
      if (type === "text") {
        data.append("content", content);
      } else if (type === "image" && mediaUrl) {
        // For image, we need to convert the data URL to a Blob
        if (mediaUrl.startsWith("data:image")) {
          const blob = await fetch(mediaUrl).then((r) => r.blob());
          data.append("file", blob, "image.jpg");
        } else {
          data.append("file", mediaUrl);
        }
      } else if (type === "audio" && mediaUrl) {
        // For audio from recorder, we already have a Blob URL
        if (mediaUrl.startsWith("blob:")) {
          const blob = await fetch(mediaUrl).then((r) => r.blob());
          data.append("file", blob, "audio.webm");
        } else {
          data.append("file", mediaUrl);
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

  const getWidgetSettings = async () => {
    try {
      const data = {
        apiKey,
      };
      const response = await axios.get(`${URLS.baseUrl}/widget-service/get`, {
        params: data,
      });
      setWidgetSettings(response.data.data);
      console.log("businessId : ", response.data.data.businessId);
      setBusinessId(response.data.data.businessId); // Set the businessId from the response
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching widget settings:", error);
    }
  };

  const handleTriggerContinue = () => {
    setShowTrigger(false);
    setIsOpen(true);

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
  };

  const handleTriggerClose = () => {
    setShowTrigger(false);
  };

  if (!widgetSettings) return null;

  return (
    <>
      {showTrigger && currentTrigger && !isOpen && (
        <ChatTrigger
          message={currentTrigger.message || currentTrigger.content}
          agentName={currentTrigger.agentName || currentTrigger.agent.name}
          agentAvatar={
            currentTrigger.agentAvatar || currentTrigger.agent.avatar
          }
          brandLogo={widgetSettings.avatarUrl}
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
          style={{
            backgroundColor: widgetSettings.colorScheme ?? "#DDE8FC",
          }}
        >
          {/* <MessageSquare /> */}
          <img
            src={`${URLS.assetsUrl}${
              widgetSettings.avatarUrl ?? "/public/app_logo.png"
            }`}
            style={{
              width: "30px",
              width: "30px",
            }}
          />
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
            sessionId={sessionId}
          />
          <ChatInput onSendMessage={sendMessage} inputRef={inputRef} />
        </div>
      )}
    </>
  );
};

// Mount the widget inside a dynamically created div
const root = document.createElement("div");
document.body.appendChild(root);
const r = createRoot(root);
r.render(React.createElement(ChatWidget, null));
