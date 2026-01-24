import type { ChatMessage } from "../types/chat";

const API_BASE_URL = "http://localhost:3001";

export async function fetchMessages(): Promise<ChatMessage[]> {
  const response = await fetch(`${API_BASE_URL}/messages`);
  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }
  return response.json();
}

export async function postMessage(
  message: Omit<ChatMessage, "id">,
): Promise<ChatMessage> {
  const response = await fetch(`${API_BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  if (!response.ok) {
    throw new Error("Failed to post message");
  }
  return response.json();
}
