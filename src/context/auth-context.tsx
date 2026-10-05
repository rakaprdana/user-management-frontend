import React, { createContext, useEffect, useState } from "react";
import {
  type AuthContextType,
  type AuthProviderType,
} from "../interfaces/auth-context";
import Cookies from "js-cookie";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get("token"),
  );

  useEffect(() => {
    function handleTokenChange() {
      setIsAuthenticated(!!Cookies.get("token"));
    }

    window.addEventListener("storage", handleTokenChange);
    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
