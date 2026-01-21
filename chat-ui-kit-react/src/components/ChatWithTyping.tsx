import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

export function ChatWithTyping() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            typingIndicator={<TypingIndicator content="田中が入力中..." />}
          >
            <Message
              model={{
                message: "こんにちは！",
                sender: "田中",
                direction: "incoming",
                position: "single",
              }}
            />
          </MessageList>
          <MessageInput placeholder="メッセージを入力..." />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
