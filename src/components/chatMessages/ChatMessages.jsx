"use client";

import { useEffect, useRef } from "react";
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
              className="chat-widget-message-bubble"
              style={{
                backgroundColor:
                  message.sender === "business"
                    ? "#e5e5ea"
                    : colorScheme ?? "#1877f2",
              }}
            >
              {message.content}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
