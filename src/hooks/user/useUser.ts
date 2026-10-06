import { useQuery } from "@tanstack/react-query";
import type { User } from "../../interfaces/user";
import Cookies from "js-cookie";
import Api from "../../services/api";

export default function useUsers() {
  // fetching data
  return useQuery<User[], Error>({
    // query key
    queryKey: ["users"],

    queryFn: async function () {
      const token = Cookies.get("token");

      const response = await Api.get("/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data as User[];
    },
  });
}
