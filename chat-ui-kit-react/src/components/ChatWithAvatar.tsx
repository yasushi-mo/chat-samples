import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

export function ChatWithAvatar() {
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
            >
              <Avatar
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                name="田中"
              />
            </Message>
          </MessageList>
          <MessageInput placeholder="メッセージを入力..." />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
