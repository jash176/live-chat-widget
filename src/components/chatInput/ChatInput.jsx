"use client";
import { useState } from "react";
import { Smile, Paperclip, Mic, Send } from "lucide-react";
import "./chat-input.css";
import ImageAttachment from "../imageAttachment/ImageAttachment";
import AudioRecorder from "../audioRecorder/AudioRecorder";
import EmojiPicker from "../emojiPicker/EmojiPicker";

export default function ChatInput({ inputRef, onSendMessage }) {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showImageAttachment, setShowImageAttachment] = useState(false);
  const [showAudioRecorder, setShowAudioRecorder] = useState(false);
  const [selectedImage, setSelectedImage] = useState (null);
  const [recordedAudio, setRecordedAudio] = useState(null);

  const handleSubmit = (type, media) => {
    // e.preventDefault();
   
    if (type === "image" && media) {
      onSendMessage("", "image", media);
      setSelectedImage(null);
    } else if (type === "audio" && media) {
      // const audioUrl = URL.createObjectURL(recordedAudio);
      onSendMessage("", "audio", URL.createObjectURL(media));
      setRecordedAudio(null);
    } else if (message.trim()) {
      console.log("message", message);
      onSendMessage(message, "text");
      setMessage("");
    }
    setShowImageAttachment(false);
    setShowAudioRecorder(false);
  };

  const handleEmojiSelect = (emoji) => {
    // Type stirng
    setMessage((prev) => prev + emoji);
    setShowEmojiPicker(false);
    // Focus the input after selecting an emoji
    inputRef.current?.focus();
  };

  const handleImageSelect = (imageData) => {
    // setSelectedImage(imageData);
    
    handleSubmit("image", imageData)
    setShowImageAttachment(false);
  };

  const handleAudioRecord = (audioBlob) => {
    // setRecordedAudio(audioBlob);
    handleSubmit("audio", audioBlob);
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
          onSend={handleImageSelect}
        />
      )}

      {showAudioRecorder && (
        <AudioRecorder
          onCancel={() => setShowAudioRecorder(false)}
          onSend={handleAudioRecord}
        />
      )}
      {!isFeatureActive && (
        <form className="chat-widget-input-container">
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
              // disabled={!!selectedImage || !!recordedAudio}
            />
            <button
              // type="submit"
              className="chat-widget-send-button"
              disabled={!message.trim() }
              aria-label="Send message"
              onClick={() => handleSubmit()}
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
