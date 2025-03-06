"use client";

import React, { useEffect, useRef } from "react";
import "./chat-messages.css";
import { URLS } from "@/utils/generalUrls";

export default function ChatMessages({
  messages,
  avatar,
  senderName,
  colorScheme,
}) {
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
        )
      case "audio":
        return (
          <div className="chat-widget-message-media">
            <audio src={getAssetUrl(message.content)} controls className="chat-widget-message-audio" />
          </div>
        )
      case "text":
      default:
        return message.content
    }
  }

  return (
    <div className="chat-widget-messages">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`chat-widget-message ${
            message.sender === "customer" ? "user-message" : "agent-message"
          }`}
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
  );
}
