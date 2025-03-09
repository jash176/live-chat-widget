import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { URLS } from "@/utils/generalUrls";
import { socket } from "@/config/socket";
const EXECUTED_TRIGGERS_KEY = "executedTriggers";
// Convert wildcard path (e.g., /page/* or /page/*/**) to regex
const matchPath = (pattern, pathname) => {
  const escaped = pattern.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&");
  const regexString = "^" + escaped.replace(/\*/g, ".*") + "$";
  return new RegExp(regexString).test(pathname);
};

const useChatTriggers = (apiKey, openChatbox, sessionId) => {
  const [triggers, setTriggers] = useState([]);

  // Helper function to check if trigger was already executed
  const isAlreadyExecuted = useCallback((triggerId) => {
    const executedTriggers = JSON.parse(
      localStorage.getItem(EXECUTED_TRIGGERS_KEY) || "[]"
    );
    return executedTriggers.includes(triggerId);
  }, []);

  // Helper function to mark trigger as executed
  const markTriggerAsExecuted = useCallback((triggerId) => {
    const executedTriggers = JSON.parse(
      localStorage.getItem(EXECUTED_TRIGGERS_KEY) || "[]"
    );
    localStorage.setItem(
      EXECUTED_TRIGGERS_KEY,
      JSON.stringify([...executedTriggers, triggerId])
    );
  }, []);

  useEffect(() => {
    axios
      .get(`${URLS.baseUrl}/trigger-service/get?apiKey=${apiKey}`)
      .then((res) => {
        if (res.data.success) setTriggers(res.data.data);
      });
  }, [apiKey]);

  useEffect(() => {
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      // Create a conditions tracker object for each trigger
      const conditionsMet = new Set();
      const totalConditions = trigger.conditions.length;

      trigger.conditions.forEach((condition) => {
        switch (condition.type) {
          case "on_page":
            if (matchPath(condition.value, window.location.pathname)) {
              conditionsMet.add(condition.type);
              // If all conditions are met, execute trigger
              if (conditionsMet.size === totalConditions) {
                executeTrigger(trigger);
              }
            }
            break;

          case "on_click_link":
            document
              .querySelector(condition.value)
              ?.addEventListener("click", () => {
                conditionsMet.add(condition.type);
                if (conditionsMet.size === totalConditions) {
                  executeTrigger(trigger);
                }
              });
            break;

          case "on_leave_intent":
            document.addEventListener(
              "mouseleave",
              () => {
                conditionsMet.add(condition.type);
                if (conditionsMet.size === totalConditions) {
                  executeTrigger(trigger);
                }
              },
              { once: true }
            );
            break;

          case "after_delay":
            setTimeout(() => {
              conditionsMet.add(condition.type);
              if (conditionsMet.size === totalConditions) {
                executeTrigger(trigger);
              }
            }, parseInt(condition.value) * 1000);
            break;
        }
      });
    });

    // Cleanup function
    return () => {
      triggers.forEach((trigger) => {
        trigger.conditions.forEach((condition) => {
          if (condition.type === "on_click_link") {
            document
              .querySelector(condition.value)
              ?.removeEventListener("click", null);
          }
        });
      });
    };
  }, [triggers]);

  const executeTrigger = useCallback(
    (trigger) => {
      if (trigger.executeOnce && isAlreadyExecuted(trigger.id)) {
        return;
      }
      const executeAction = () => {
        // Mark as executed before running action if executeOnce is true
        if (trigger.executeOnce) {
          markTriggerAsExecuted(trigger.id);
        }
        switch (trigger.action) {
          case "show_message":
            socket.emit("trigger-send-message", { sessionId, trigger });
            break;
          case "open_chatbox":
            openChatbox();
            break;
        }
      };

      if (trigger.delayTime) {
        setTimeout(executeAction, parseInt(trigger.delayTime));
      } else {
        executeAction();
      }
    },
    [sessionId, openChatbox]
  );
};

export default useChatTriggers;
