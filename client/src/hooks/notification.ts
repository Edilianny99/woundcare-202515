import routes from "@/utils/routes";

export const notificationRoutes = new Map();
notificationRoutes.set("POST_BANDAGE_CHANGE", routes.postBandageChangeForm);
notificationRoutes.set(
  "MONITORING_SIGNS_AND_SYMPTOMS",
  routes.monitoringSignsAndSymptomsForm
);
notificationRoutes.set("DISCHARGE", routes.dischargeForm);

export const notificationImages = new Map();
notificationImages.set(
  "POST_BANDAGE_CHANGE",
  "/notifications/first-aid-kit.svg"
);
notificationImages.set(
  "MONITORING_SIGNS_AND_SYMPTOMS",
  "/notifications/symptoms-man.svg"
);
notificationImages.set("DISCHARGE", "/notifications/discharge.svg");
notificationImages.set("MEDICATION_TIME", "/notifications/medication.svg");
notificationImages.set("BANDAGE_CHANGE", "/notifications/first-aid-kit.svg");

export const notificationTitles = new Map();
notificationTitles.set("POST_BANDAGE_CHANGE", "Post cambio de vendaje");
notificationTitles.set(
  "MONITORING_SIGNS_AND_SYMPTOMS",
  "Seguimiento de signos y síntomas"
);
notificationTitles.set("DISCHARGE", "Alta del paciente");
notificationTitles.set("MEDICATION_TIME", "Es hora de tu medicación");
notificationTitles.set("BANDAGE_CHANGE", "Cambio de vendaje");
