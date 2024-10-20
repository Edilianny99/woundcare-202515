import { Role } from "@/interfaces/common/role.type";

export interface LoginResponse {
  token: string;
  role: Role;
}
