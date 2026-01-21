import { useAtomValue, useSetAtom } from "jotai";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { messagesAtom, addMessageAtom, isTypingAtom } from "../atoms/chatAtom";

export function DynamicChat() {
  const messages = useAtomValue(messagesAtom);
  const addMessage = useSetAtom(addMessageAtom);
  const isTyping = useAtomValue(isTypingAtom);

  const handleSend = (text: string) => {
    addMessage({
      message: text,
      sender: "自分",
      direction: "outgoing",
    });
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              isTyping ? <TypingIndicator content="AI が入力中..." /> : null
            }
          >
            {messages.map((msg, index) => {
              const isLastFromSender =
                index === messages.length - 1 ||
                messages[index + 1]?.sender !== msg.sender;

              return (
                <Message
                  key={msg.id}
                  model={{
                    message: msg.message,
                    sender: msg.sender,
                    direction: msg.direction,
                    position: isLastFromSender ? "last" : "normal",
                  }}
                />
              );
            })}
          </MessageList>
          <MessageInput placeholder="メッセージを入力..." onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
