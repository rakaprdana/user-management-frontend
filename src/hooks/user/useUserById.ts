import { useQuery } from "@tanstack/react-query";
import type { User } from "../../interfaces/user";
import Cookies from "js-cookie";
import Api from "../../services/api";

export default function useUserById(id: number) {
  return useQuery<User, Error>({
    queryKey: ["user", id],

    queryFn: async () => {
      const token = Cookies.get("token");

      const response = await Api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data as User;
    },
  });
}
