import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { URLS } from "@/utils/generalUrls";
import { socket } from "@/config/socket";

// Convert wildcard path (e.g., /page/* or /page/*/**) to regex
const matchPath = (pattern, pathname) => {
  const escaped = pattern.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&");
  const regexString = "^" + escaped.replace(/\*/g, ".*") + "$";
  return new RegExp(regexString).test(pathname);
};

const useChatTriggers = (apiKey, openChatbox, sessionId) => {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    axios.get(`${URLS.baseUrl}/trigger-service/get?apiKey=${apiKey}`).then((res) => {
      if (res.data.success) setTriggers(res.data.data);
    });
  }, [apiKey]);

  useEffect(() => {
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      trigger.conditions.forEach((condition) => {
        switch (condition.type) {
          // **1️⃣ After Delay Trigger (Can Combine with Others)**
          case "after_delay":
            setTimeout(() => executeTrigger(trigger), parseInt(condition.value) * 1000);
            break;

          // **2️⃣ On Specific Page Trigger (Can Combine with Delay)**
          case "on_page":
            if (matchPath(condition.value, window.location.pathname)) {
              executeTrigger(trigger);
            }
            break;

          // **3️⃣ On Click Link Trigger (Can Combine with Page/Delay)**
          case "on_click_link":
            document.querySelector(condition.value)?.addEventListener("click", () => executeTrigger(trigger));
            break;

          // **4️⃣ Leave Intent Trigger (Can Combine with Page/Delay)**
          case "on_leave_intent":
            document.addEventListener(
              "mouseleave",
              () => executeTrigger(trigger),
              { once: true }
            );
            break;

          default:
            break;
        }
      });
    });
  }, [triggers]);

  const executeTrigger = useCallback(
    (trigger) => {
      if (trigger.action === "show_message") {
        socket.emit("trigger-send-message", { sessionId, trigger });
      } else if (trigger.action === "open_chatbox") {
        openChatbox();
      }
    },
    [sessionId, openChatbox]
  );
};

export default useChatTriggers;
