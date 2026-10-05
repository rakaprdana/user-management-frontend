import { useMutation } from "@tanstack/react-query";
import type { LoginRequest } from "../interfaces/request/auth-request";
import Api from "../services/api";

export default function useLogin() {
  return useMutation({
    mutationFn: async function (data: LoginRequest) {
      const response = await Api.post("/auth/login", data);
      return response.data;
    },
  });
}
