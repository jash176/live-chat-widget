"use client"
import React from "react"
import "./chat-trigger.css"

export default function ChatTrigger({ message, agentName, agentAvatar, onContinue, onClose }) {
  return (
    <div className="chat-trigger">
      <button className="chat-trigger-close" onClick={onClose} aria-label="Close message">
        &times;
      </button>

      <div className="chat-trigger-content">
        <div className="chat-trigger-header">
          <img src={agentAvatar || "/placeholder.svg"} alt={agentName} className="chat-trigger-avatar" />
          <span className="chat-trigger-name">{agentName}</span>
        </div>

        <p className="chat-trigger-message">{message}</p>

        <button className="chat-trigger-button" onClick={onContinue}>
          Continue conversation
        </button>
      </div>

      <div className="chat-trigger-brand">
        <img src={agentAvatar || "/placeholder.svg"} alt="Brand" className="chat-trigger-brand-avatar" />
      </div>
    </div>
  )
}

