import { useMutation } from "@tanstack/react-query";
import type { UserRequest } from "../../interfaces/request/user-request";
import Cookies from "js-cookie";
import Api from "../../services/api";

export default function useUserCreate() {
  return useMutation({
    mutationFn: async function (data: UserRequest) {
      const token = Cookies.get("token");

      const response = await Api.post("/users/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    },
  });
}
