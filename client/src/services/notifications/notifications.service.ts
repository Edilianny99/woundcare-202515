import { PaginatedResponse } from "@/interfaces/common/responses.interface";
import { Notification } from "@/interfaces/notification/notification.interface";
import { fetchAPI } from "@/utils/api";

export const getMyNotifications = async (
  page?: number,
  perPage?: number
): Promise<PaginatedResponse<Notification>> => {
  const data = await fetchAPI<PaginatedResponse<Notification>>(
    `/notifications/me?${page ? `page=${page}&` : ""}${
      perPage ? `per-page=${perPage}` : ""
    }`,
    "GET"
  );
  return data;
};

export const readNotification = async (
  notificationId: number,
  read: boolean = true
): Promise<Notification> => {
  const data = await fetchAPI<Notification>(
    `/notifications/${notificationId}/me`,
    "PATCH",
    { read }
  );
  return data;
};

export const readAllNotifications = async (
  read: boolean = true
): Promise<void> => {
  await fetchAPI<void>(`/notifications/me`, "PATCH", { read });
};
