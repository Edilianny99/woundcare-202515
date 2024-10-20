import { Conversation } from "@/interfaces/chat/conversation.interface";
import { fetchAPI } from "@/utils/api";

export const getConversation = async (conversationId: number) => {
  const data = await fetchAPI<Conversation>(
    `/conversations/${conversationId}/user`,
    "GET"
  );
  return data;
};
