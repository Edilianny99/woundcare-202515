import { Nurse, Nurses } from "@/interfaces/admin/admin.interface";
import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import { fetchAPI } from "@/utils/api";

export const createNurse = async (nurse: Nurse) => {
    const data = await fetchAPI<Nurse>("/nurse", "POST", nurse);
    return data;
};
export const getNurses = async (page?: number, perPage?: number): Promise<PaginatedResponse<Nurses>> => {
    const data = await fetchAPI<PaginatedResponse<Nurses>>(`/nurse?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET");
    return data;
  };