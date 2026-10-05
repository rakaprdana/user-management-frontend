import type { User } from "../interfaces/user";
import Cookies from "js-cookie";

export default function useAuthUser(): User | null {
  const user = Cookies.get("user");

  return user ? (JSON.parse(user) as User) : null;
}
