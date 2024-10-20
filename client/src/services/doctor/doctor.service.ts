import { ConversationListItem } from "@/interfaces/chat/conversation.interface";
import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import { Patients, TheMedicalFile, ThePatientInfo } from "@/interfaces/doctor/doctor.interface";
import { Doctor } from "@/interfaces/nurse/nurse.interface";
import { fetchAPI } from "@/utils/api";

export const getMe = async () => {
  const data = await fetchAPI<Doctor>("/doctor/me", "GET");
  return data;
};
export const getNursesConversations = async (
  page?: number,
  perPage?: number
) => {
  const data = await fetchAPI<PaginatedResponse<ConversationListItem>>(
    `/conversations/user/nurse?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};
export const getPatients = async (page?: number, perPage?: number): Promise<PaginatedResponse<Patients>> => {
  const data = await fetchAPI<PaginatedResponse<Patients>>(`/patient/active/doctor?${page ? `page=${page}&` : ""}${
    perPage ? `per-page=${perPage}` : ""
  }`,
  "GET");
  return data;
};
export const getPatientMedicalFile = async (nationalId: string) => {
  const data = await fetchAPI<TheMedicalFile>(
    `/medical-file/patient/${nationalId}`,
    "GET"
  );
  return data;
};
export const getPatientInfo = async (nationalId: string) => {
  const data = await fetchAPI<ThePatientInfo>(`/patient/${nationalId}`, "GET");
  return data;
};
