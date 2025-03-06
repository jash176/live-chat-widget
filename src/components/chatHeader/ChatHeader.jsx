import React from 'react'
import { X, MessageSquare } from "lucide-react";
import "./chat-header.css";
import { URLS } from "@/utils/generalUrls";

export default function ChatHeader({
  onClose,
  colorScheme,
  currentAgent,
  businessInfo,
}) {
  return (
    <div
      className="chat-widget-header"
      style={{
        backgroundColor: colorScheme ?? "#1877f2",
      }}
    >
      <div className="chat-widget-header-tabs">
        {/* <div className="chat-widget-tab active">
          <MessageSquare size={16} />
          <span>Chat</span>
        </div>
        <div className="chat-widget-tab">
          <Book size={16} />
          <span>Help</span>
        </div>
        <div className="chat-widget-tab">
          <Search size={16} />
          <span>Search</span>
        </div> */}
      </div>

      <div className="chat-widget-header-content">
        {!currentAgent ? (
          <div className="chat-widget-agents">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Agent 1"
              className="chat-widget-agent-avatar"
            />
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Agent 2"
              className="chat-widget-agent-avatar"
            />
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Agent 3"
              className="chat-widget-agent-avatar"
            />
            <div className="chat-widget-agent-avatar message-icon">
              <MessageSquare size={16} />
            </div>
          </div>
        ) : (
          <img
            src={`${URLS.assetsUrl}${
              currentAgent.avatar ?? businessInfo.avatarUrl
            }`}
            alt="Agent 3"
            className="chat-widget-agent-avatar"
          />
        )}
        <h2>
          {currentAgent
            ? `${currentAgent.name} from ${businessInfo.businessName}`
            : "Questions? Chat with us!"}
        </h2>
        {/* <p>Was last active 01/03/2025</p> */}
      </div>

      <button
        className="chat-widget-close-button"
        onClick={onClose}
        aria-label="Close chat"
      >
        <X size={16} />
      </button>
    </div>
  );
}
