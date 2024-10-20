import { Message } from "@/interfaces/chat/messages.interface";
import { fetchAPI, fetchFilesAPI } from "@/utils/api";

export const createTextMessage = async (
  text: string,
  conversationId: number
) => {
  const data = await fetchAPI<Message>("/messages/text", "POST", {
    text,
    conversationId: conversationId.toString(),
  });
  return data;
};

export const createImageMessage = async (
  image: File,
  conversationId: number
) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("conversationId", conversationId.toString());
  const data = await fetchFilesAPI<Message>(
    "/messages/upload",
    "POST",
    formData
  );
  return data;
};
