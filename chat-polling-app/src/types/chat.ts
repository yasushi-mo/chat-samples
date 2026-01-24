export interface ChatMessage {
  id: string;
  message: string;
  sender: string;
  direction: "incoming" | "outgoing";
  sentTime: string;
}
