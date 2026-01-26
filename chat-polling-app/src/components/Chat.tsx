import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useMessages } from "../hooks/useMessages";

export function Chat() {
  const { messages, isLoading, sendMessage } = useMessages();

  const handleSend = (text: string) => {
    if (text.trim()) {
      sendMessage(text, "自分");
    }
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={
              isLoading ? <TypingIndicator content="読み込み中..." /> : null
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
                    sentTime: msg.sentTime,
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
