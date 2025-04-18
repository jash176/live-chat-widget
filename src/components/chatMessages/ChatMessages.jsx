"use client";

import React, { useEffect, useRef, useState } from "react";
import "./chat-messages.css";
import { URLS } from "@/utils/generalUrls";
import EmailPrompt from "../emailPrompt/EmailPrompt";
import { BellIcon } from "lucide-react";

export default function ChatMessages({
  messages,
  avatar,
  senderName,
  colorScheme,
  sessionId,
}) {
  const messagesEndRef = useRef(null);
  const [showEmailBanner, setShowEmailBanner] = useState(false);

  // Check if email exists in localStorage
  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setShowEmailBanner(!userEmail);
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, []);

  // Find email prompt message to scroll to
  const scrollToEmailPrompt = () => {
    const emailPromptMessage = messages.find(
      (message) => message.contentType === "email_prompt"
    );
    if (emailPromptMessage) {
      const element = document.getElementById(
        `message-${emailPromptMessage.id}`
      );
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onEmailSubmit = () => {
    setShowEmailBanner(false);
  };

  function getAssetUrl(url) {
    if (url && url.startsWith("/public")) {
      return `${URLS.assetsUrl}${url}`;
    }
    return url;
  }

  const renderMessageContent = (message) => {
    switch (message.contentType) {
      case "image":
        return (
          <div className="chat-widget-message-media">
            <img
              src={getAssetUrl(message.content) || "/placeholder.svg"}
              alt="Shared image"
              className="chat-widget-message-image"
            />
          </div>
        );
      case "audio":
        return (
          <div className="chat-widget-message-media">
            <audio
              src={getAssetUrl(message.content)}
              controls
              className="chat-widget-message-audio"
            />
          </div>
        );
      case "email_prompt":
        return (
          <EmailPrompt
            colorScheme={colorScheme}
            sessionId={sessionId}
            onEmailSubmit={onEmailSubmit}
          />
        );
      case "text":
      default:
        return message.content;
    }
  };

  return (
    <div className="chat-widget-messages">
      <div className="messages-wrapper">
        {messages.map((message) => (
          <div
            key={message.id}
            id={`message-${message.id}`}
            className={`chat-widget-message ${
              message.sender === "customer" ? "user-message" : "agent-message"
            }`}
            style={{
              display:
                message.contentType === "email_prompt" &&
                localStorage.getItem("userEmail")
                  ? "none"
                  : "flex",
            }}
          >
            {message.sender === "business" && avatar && (
              <div className="chat-widget-message-avatar">
                <img src={`${URLS.assetsUrl}${avatar}`} alt={senderName} />
              </div>
            )}

            <div className="chat-widget-message-content">
              {message.sender === "business" && (
                <div className="chat-widget-message-sender">{senderName}</div>
              )}
              <div
                className={`chat-widget-message-bubble ${
                  message.type === "image" || message.type === "audio"
                    ? "media-bubble"
                    : ""
                }`}
                style={{
                  backgroundColor:
                    message.sender === "business"
                      ? "#e5e5ea"
                      : colorScheme ?? "#1877f2",
                }}
              >
                {renderMessageContent(message)}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {showEmailBanner && (
        <div
          className="email-notification-banner"
          onClick={scrollToEmailPrompt}
        >
          {/* <BsBell className="bell-icon" /> */}
          <BellIcon size={15} />
          <span>Click to set your email to get notifications</span>
        </div>
      )}
    </div>
  );
}
