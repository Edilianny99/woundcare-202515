import routes from "@/utils/routes";
import { useRouter } from "next/navigation";

export function useRoleRouter() {
  const router = useRouter();

  const roleRoute = new Map();
  roleRoute.set("ADMIN", () => router.push(routes.adminHomePage));
  roleRoute.set("PATIENT", () => router.push(routes.patientHomePage));
  roleRoute.set("NURSE", () => router.push(routes.nurseHomePage));
  roleRoute.set("DOCTOR", () => router.push(routes.doctorHomePage));

  return roleRoute;
}
