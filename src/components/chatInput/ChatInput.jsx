"use client";
import { useState } from "react";
import { Smile, Paperclip, Mic, Send } from "lucide-react";
import "./chat-input.css";
import ImageAttachment from "../imageAttachment/ImageAttachment";
import AudioRecorder from "../audioRecorder/AudioRecorder";
import EmojiPicker from "../emojiPicker/EmojiPicker";

export default function ChatInput({ onSendMessage, inputRef, onSendAudio }) {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showImageAttachment, setShowImageAttachment] = useState(false);
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleEmojiSelect = (emoji) => {
    // Type stirng
    setMessage((prev) => prev + emoji);
    // Focus the input after selecting an emoji
    inputRef.current?.focus();
  };

  const handleSendImage = (imageData) => {
    // Type string
    if (onSendImage) {
      onSendImage(imageData);
    } else {
      // Fallback to sending as a message with a placeholder
      onSendMessage("[Image Attachment]");
    }
    setShowImageAttachment(false);
  };

  const handleSendAudio = (audioBlob) => {
    // Type Blob
    if (onSendAudio) {
      onSendAudio(audioBlob);
    } else {
      // Fallback to sending as a message with a placeholder
      onSendMessage("[Audio Message]");
    }
    setShowAudioRecorder(false);
  };

  // Determine if any feature is active
  const isFeatureActive =
    showEmojiPicker || showImageAttachment || showAudioRecorder;

  return (
    <div className="chat-widget-input-wrapper">
      {showEmojiPicker && (
        <EmojiPicker
          onEmojiSelect={handleEmojiSelect}
          onClose={() => setShowEmojiPicker(false)}
        />
      )}

      {showImageAttachment && (
        <ImageAttachment
          onCancel={() => setShowImageAttachment(false)}
          onSend={handleSendImage}
        />
      )}

      {showAudioRecorder && (
        <AudioRecorder
          onCancel={() => setShowAudioRecorder(false)}
          onSend={handleSendAudio}
        />
      )}
      {!isFeatureActive && (
        <form className="chat-widget-input-container" onSubmit={handleSubmit}>
          <div className="chat-widget-input-actions">
            <button
              type="button"
              className="chat-widget-input-action"
              aria-label="Add emoji"
              onClick={() => setShowEmojiPicker(true)}
            >
              <Smile size={20} />
            </button>
            <button
              type="button"
              className="chat-widget-input-action"
              aria-label="Attach file"
              onClick={() => setShowImageAttachment(true)}
            >
              <Paperclip size={20} />
            </button>
            <button
              type="button"
              className="chat-widget-input-action"
              aria-label="Voice message"
              onClick={() => setShowAudioRecorder(true)}
            >
              <Mic size={20} />
            </button>
          </div>

          <div className="chat-widget-input-field">
            <input
              ref={inputRef}
              type="text"
              placeholder="Compose your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="chat-widget-send-button"
              disabled={!message.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>

          <div className="chat-widget-branding">
            <span>
              Powered by{" "}
              <a
                href="https://supportly.site"
                target="_blank"
                className="chat-widget-brand-name"
              >
                Supportly
              </a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
