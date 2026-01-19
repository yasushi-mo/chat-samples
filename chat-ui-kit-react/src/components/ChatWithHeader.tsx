import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
} from "@chatscope/chat-ui-kit-react";

export function ChatWithHeader() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              name="田中太郎"
            />
            <ConversationHeader.Content userName="田中太郎" info="オンライン" />
            <ConversationHeader.Actions>
              {/* アクションボタンを配置 */}
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
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
