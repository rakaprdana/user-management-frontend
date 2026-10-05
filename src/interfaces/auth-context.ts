import type { ReactNode } from "react";
import type React from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AuthProviderType {
  children: ReactNode;
}
