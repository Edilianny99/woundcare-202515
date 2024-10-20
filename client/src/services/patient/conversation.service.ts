import { Conversation } from "@/interfaces/chat/conversation.interface";
import { fetchAPI } from "@/utils/api";

export const getMyConversation = async () => {
  const data = await fetchAPI<Conversation>("/conversations/patient", "GET");
  return data;
};
