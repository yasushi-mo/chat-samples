import {
  MainContainer,
  Sidebar,
  Search,
  ConversationList,
  Conversation,
  Avatar,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";

export function ChatList() {
  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <Sidebar position="left">
          <Search placeholder="検索..." />
          <ConversationList>
            <Conversation
              name="田中太郎"
              lastSenderName="田中"
              info="こんにちは！"
              active
            >
              <Avatar
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                name="田中太郎"
              />
            </Conversation>
            <Conversation
              name="佐藤花子"
              lastSenderName="佐藤"
              info="明日の予定は？"
            >
              <Avatar
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                name="佐藤花子"
              />
            </Conversation>
            <Conversation
              name="鈴木一郎"
              lastSenderName="鈴木"
              info="了解しました"
              unreadCnt={3}
            >
              <Avatar
                src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
                name="鈴木一郎"
              />
            </Conversation>
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <Avatar
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
              name="田中太郎"
            />
            <ConversationHeader.Content userName="田中太郎" info="オンライン" />
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
