"use client";

import { useEffect, useRef } from "react";
import "./emoji-picker.css";

// Common emojis for simplicity - in a real app, you might use a library like emoji-mart
const EMOJI_CATEGORIES = [
  {
    name: "Smileys",
    emojis: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
    ],
  },
  {
    name: "Gestures",
    emojis: [
      "👍",
      "👎",
      "👌",
      "✌️",
      "🤞",
      "🤟",
      "🤘",
      "🤙",
      "👈",
      "👉",
      "👆",
      "👇",
      "☝️",
      "✋",
      "🤚",
      "🖐️",
      "🖖",
    ],
  },
  {
    name: "Objects",
    emojis: [
      "❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "💔",
      "💯",
      "💢",
      "💥",
      "💫",
      "💦",
      "💨",
      "🕳️",
      "💣",
      "💬",
    ],
  },
];

export default function EmojiPicker({ onEmojiSelect, onClose }) {
  const pickerRef = useRef(null);

  useEffect(() => {
    // Close emoji picker when clicking outside
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleEmojiClick = (emoji) => {
    onEmojiSelect(emoji);
    onClose();
  };

  return (
    <div className="emoji-picker" ref={pickerRef}>
      <div className="emoji-picker-header">
        <span>Emojis</span>
      </div>

      <div className="emoji-picker-content">
        {EMOJI_CATEGORIES.map((category) => (
          <div key={category.name} className="emoji-category">
            <div className="emoji-category-title">{category.name}</div>
            <div className="emoji-grid">
              {category.emojis.map((emoji, index) => (
                <button
                  key={index}
                  className="emoji-item"
                  onClick={() => handleEmojiClick(emoji)}
                  aria-label={`Emoji ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
