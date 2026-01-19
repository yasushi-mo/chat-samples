import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export function BasicChat() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "こんにちは！",
                sender: "田中",
                direction: "incoming",
                position: "single",
              }}
            />
            <Message
              model={{
                message: "こんにちは！元気ですか？",
                sender: "自分",
                direction: "outgoing",
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
