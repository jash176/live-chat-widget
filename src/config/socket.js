import { URLS } from "@/utils/generalUrls";
import { io } from "socket.io-client";

export const socket = io(URLS.socket, {
  transports: ["websocket"],
  upgrade: false,
  reconnectionAttempts: 5, // Retry up to 5 times
  timeout: 5000, // Timeout after 5s
});
