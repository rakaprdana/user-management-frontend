import { useMutation } from "@tanstack/react-query";
import type { UserRequest } from "../../interfaces/request/user-request";
import Cookies from "js-cookie";
import Api from "../../services/api";

export default function useUserUpdate() {
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UserRequest }) => {
      const token = Cookies.get("token");

      const response = await Api.put(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });
}
