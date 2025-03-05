import { useState } from "react";
import { X } from "lucide-react";
import "./image-picker.css";

export default function ImageAttachment({ onCancel, onSend }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }
    setFile(file)
    // Create preview URL
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setPreviewUrl(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSend = () => {
    if (previewUrl) {
      onSend(previewUrl);
    }
  };

  return (
    <div className="image-attachment">
      <div className="image-attachment-header">
        <span>Image Attachment</span>
        <button
          className="image-attachment-close"
          onClick={onCancel}
          aria-label="Cancel attachment"
        >
          <X size={16} />
        </button>
      </div>

      {!previewUrl ? (
        <div className="image-attachment-upload">
          <label className="image-upload-label">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="image-upload-input"
            />
            <div className="image-upload-placeholder">
              <span>Click to select an image</span>
              <span className="image-upload-hint">JPG, PNG, GIF up to 5MB</span>
            </div>
          </label>
        </div>
      ) : (
        <div className="image-attachment-preview">
          <img src={previewUrl || "/placeholder.svg"} alt="Preview" />
          <div className="image-attachment-actions">
            <button className="image-attachment-cancel" onClick={onCancel}>
              Cancel
            </button>
            <button className="image-attachment-send" onClick={handleSend}>
              Send Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
