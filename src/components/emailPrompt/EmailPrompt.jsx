import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ask-email.css";
import { URLS } from "@/utils/generalUrls";

const EmailPrompt = ({ colorScheme, sessionId, onEmailSubmit }) => {
  const [email, setEmail] = useState("");

  const updateEmail = async () => {
    try {
      const data = {
        customerEmail: email,
        sessionId,
      };
      const response = await axios.post(
        `${URLS.baseUrl}/messages-service/update-email`,
        data
      );
      if (response.data.success) {
        onEmailSubmit();
        localStorage.setItem("userEmail", email);
      }
      // handle success
    } catch (error) {
      console.error("Error updating email:", error);
      // handle error
    }
    // setEmail("");
  };

  return (
    <div className="chat-container" style={{ maxWidth: "240px" }}>
      {/* <div className="question-box">
        <button className="back-btn">&#x276E;</button>
        <span className="question-text">What is your email address?</span>
      </div> */}
      <div className="input-box">
        <input
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="next-btn"
          style={{
            backgroundColor: colorScheme ?? "#1877f2",
          }}
          onClick={() => updateEmail()}
        >
          &#x276F;
        </button>
      </div>
      <div
        className="confirmation-box"
        style={{
          backgroundColor: colorScheme ?? "#1877f2",
        }}
      >
        <p className="confirmation-text">
          <strong>Just in case you leave or we reply later:</strong>
          <br />
          <em>how do you want us to get back to you?</em>
        </p>
        {/* <button className="email-btn">
          <span className="email-icon">📧</span> Email
        </button> */}
      </div>
    </div>
  );
};

export default EmailPrompt;
