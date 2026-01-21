import { ChatList } from "./components/ChatList";
import { ChatWithAvatar } from "./components/ChatWithAvatar";
import { ChatWithHeader } from "./components/ChatWithHeader";
import { ChatWithTyping } from "./components/ChatWithTyping";
import { ContinuousChat } from "./components/ContinuousChat";
import { DynamicChat } from "./components/DynamicChat";

export function App() {
  return <DynamicChat />;
}

export default App;
