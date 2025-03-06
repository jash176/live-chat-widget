"use client";

import React, { useState, useEffect, useRef } from "react";
import { Square, Send, X } from "lucide-react";
import "./audio-recorder.css";

export default function AudioRecorder({ onCancel, onSend }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    const initRecording = async () => {
      await startRecording();
    };

    initRecording();

    return () => {
      cleanupRecording();
    };
  }, []);

  const cleanupRecording = () => {
    if (timerRef.current) {
      console.log("clearing interval");
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        console.error("Error stopping media recorder:", e);
      }
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
      streamRef.current = null;
    }

    setRecordingTime(0);
    setIsRecording(false);
  };

  const startRecording = async () => {
    console.log("started recording");
    try {
      cleanupRecording();

      setRecordingTime(0);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: 128000,
      });

      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        setIsRecording(false); // Ensure it stops properly
        setRecordingTime(0); // Reset recording time
        if (audioChunksRef.current.length > 0) {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });
          setAudioBlob(audioBlob);
        }
      };
      mediaRecorder.start();

      setIsRecording(true);

      // Ensure the timer runs every second
      let startTime = Date.now();
      if (!timerRef.current) {
        timerRef.current = setInterval(() => {
          console.log("Started recording timer");
          setRecordingTime(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);
      }
    } catch (error) {
      console.error("Error accessing microphone:", error);
      onCancel();
    }
  };

  const stopRecording = () => {
    if (!isRecording) return;

    // Stop the timer first to prevent further updates
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setRecordingTime(0); // Reset recording time immediately after clearing interval
    }

    // Set isRecording to false after clearing the interval
    setIsRecording(false);

    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      try {
        mediaRecorderRef.current.requestData(); // Request any remaining data
        mediaRecorderRef.current.stop();
      } catch (error) {
        console.error("Error stopping recording:", error);
      }
    }

    // Stop microphone stream to release resources
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const handleCancel = () => {
    cleanupRecording();
    onCancel();
  };

  const handleSend = () => {
    if (audioBlob) {
      onSend(audioBlob);
      cleanupRecording();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="audio-recorder">
      <div className="audio-recorder-header">
        <span>{isRecording ? "Recording..." : "Recording Complete"}</span>
        <button
          className="audio-recorder-close"
          onClick={handleCancel}
          aria-label="Cancel recording"
        >
          <X size={16} />
        </button>
      </div>

      <div className="audio-recorder-content">
        <div className="audio-recorder-timer">{formatTime(recordingTime)}</div>

        {isRecording ? (
          <div className="audio-recorder-visualizer">
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
            <div className="audio-wave"></div>
          </div>
        ) : (
          audioBlob && (
            <audio
              src={URL.createObjectURL(audioBlob)}
              controls
              className="audio-recorder-preview"
            />
          )
        )}
      </div>

      <div className="audio-recorder-actions">
        {isRecording ? (
          <button
            className="audio-recorder-stop"
            onClick={stopRecording}
            aria-label="Stop recording"
          >
            <Square size={16} />
            <span>Stop</span>
          </button>
        ) : (
          <>
            <button className="audio-recorder-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button
              className="audio-recorder-send"
              onClick={handleSend}
              disabled={!audioBlob}
            >
              <Send size={16} />
              <span>Send</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
