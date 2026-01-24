import useSWR from "swr";
import { fetchMessages, postMessage } from "../api/messages";
import type { ChatMessage } from "../types/chat";

const POLLING_INTERVAL = 3000; // 3秒

export function useMessages() {
  const { data, error, isLoading, mutate } = useSWR<ChatMessage[]>(
    "messages",
    fetchMessages,
    {
      refreshInterval: POLLING_INTERVAL,
      revalidateOnFocus: true,
    },
  );

  const sendMessage = async (text: string, sender: string) => {
    const newMessage: Omit<ChatMessage, "id"> = {
      message: text,
      sender,
      direction: "outgoing",
      sentTime: new Date().toISOString(),
    };

    // 楽観的更新：サーバーレスポンスを待たずに UI を更新
    const optimisticMessage: ChatMessage = {
      ...newMessage,
      id: `temp-${Date.now()}`,
    };

    await mutate(
      async (currentMessages) => {
        const savedMessage = await postMessage(newMessage);
        // 楽観的に追加したメッセージを実際のデータで置き換え
        return [
          ...(currentMessages?.filter((m) => m.id !== optimisticMessage.id) ??
            []),
          savedMessage,
        ];
      },
      {
        optimisticData: [...(data ?? []), optimisticMessage],
        rollbackOnError: true,
      },
    );
  };

  return {
    messages: data ?? [],
    isLoading,
    isError: !!error,
    sendMessage,
  };
}
