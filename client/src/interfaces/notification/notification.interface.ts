type NotificationType =
  | "BANDAGE_CHANGE"
  | "POST_BANDAGE_CHANGE"
  | "MEDICATION_TIME"
  | "MONITORING_SIGNS_AND_SYMPTOMS"
  | "DISCHARGE";

export interface Notification {
  id: number;
  message: string;
  date: Date;
  userId: string;
  type: NotificationType;
  read: boolean;
}
