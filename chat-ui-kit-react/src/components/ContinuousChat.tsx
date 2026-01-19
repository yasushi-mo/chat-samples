import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

export function ContinuousChat() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "こんにちは",
                sender: "田中",
                direction: "incoming",
                position: "first",
              }}
            />
            <Message
              model={{
                message: "今日の会議は15時からです",
                sender: "田中",
                direction: "incoming",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "よろしくお願いします",
                sender: "田中",
                direction: "incoming",
                position: "last",
              }}
            />
          </MessageList>
          <MessageInput placeholder="メッセージを入力..." />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
