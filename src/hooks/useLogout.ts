import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
export default function useLogout(): () => void {
  const authContext = useContext(AuthContext);

  const { setIsAuthenticated } = authContext!;

  const navigate = useNavigate();

  function logout(): void {
    Cookies.remove("token");
    Cookies.remove("user");

    setIsAuthenticated(false);
    navigate("/login");
  }

  return logout;
}
