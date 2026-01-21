import { atom } from "jotai";

export interface ChatMessage {
  id: string;
  message: string;
  sender: string;
  direction: "incoming" | "outgoing";
  sentTime: string;
}

export const messagesAtom = atom<ChatMessage[]>([
  {
    id: "1",
    message: "こんにちは！何かお手伝いできることはありますか？",
    sender: "AI アシスタント",
    direction: "incoming",
    sentTime: new Date().toLocaleTimeString(),
  },
]);

export const addMessageAtom = atom(
  null,
  (get, set, newMessage: Omit<ChatMessage, "id" | "sentTime">) => {
    const messages = get(messagesAtom);
    const message: ChatMessage = {
      ...newMessage,
      id: Date.now().toString(),
      sentTime: new Date().toLocaleTimeString(),
    };
    set(messagesAtom, [...messages, message]);
  },
);

export const isTypingAtom = atom(false);
