import { useMutation } from "@tanstack/react-query";
import type { RegisterRequest } from "../interfaces/request/auth-request";
import Api from "../services/api";

export default function useRegister() {
  return useMutation({
    mutationFn: async function (data: RegisterRequest) {
      const response = await Api.post("/auth/register", data);
      return response.data;
    },
  });
}
