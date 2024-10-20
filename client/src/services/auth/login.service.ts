import { LoginResponse } from "@/interfaces/auth/login.interface";
import { fetchAPI } from "@/utils/api";

export const login = async (
  nationalId: string,
  password: string
): Promise<LoginResponse> => {
  const data = await fetchAPI<LoginResponse>("/auth/login", "POST", {
    nationalId,
    password,
  });
  return data;
};
