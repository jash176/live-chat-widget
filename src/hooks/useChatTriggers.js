import { useEffect, useState } from "react";
import axios from "axios";
import { URLS } from "@/utils/generalUrls";

const useChatTriggers = (apiKey, openChatbox, sendMessage) => {
  const [triggers, setTriggers] = useState([]);

  useEffect(() => {
    axios.get(`${URLS.baseUrl}/trigger-service/get?apiKey=${apiKey}`).then((res) => {
      if (res.data.success) setTriggers(res.data.data);
    });
  }, [apiKey]);

  useEffect(() => {
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      // **1️⃣ After Delay Trigger**
      if (trigger.condition === "after_delay") {
        setTimeout(
          () => executeTrigger(trigger),
          parseInt(trigger.condition_value) * 1000
        );
      }

      // **2️⃣ On Specific Page Trigger**
      if (
        trigger.condition === "on_page" &&
        window.location.pathname === trigger.condition_value
      ) {
        executeTrigger(trigger);
      }

      // **3️⃣ On Click Link Trigger**
      if (trigger.condition === "click_link") {
        document
          .querySelector(trigger.condition_value)
          ?.addEventListener("click", () => executeTrigger(trigger));
      }

      // **4️⃣ Leave Intent Trigger (Detect Mouse Leaving Window)**
      if (trigger.condition === "leave_intent") {
        document.addEventListener("mouseleave", () => executeTrigger(trigger), {
          once: true,
        });
      }
    });
  }, [triggers]);

  const executeTrigger = (trigger) => {
    if (trigger.action === "show_message") {
      sendMessage(trigger.message);
    } else if (trigger.action === "open_chatbox") {
      openChatbox();
    }
  };
};

export default useChatTriggers;
