import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import { Message } from "@/interfaces/chat/messages.interface";
import { fetchAPI } from "@/utils/api";

export const getMessages = async (page?: number, perPage?: number) => {
  const data = await fetchAPI<PaginatedResponse<Message>>(
    `/messages/patient?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};
