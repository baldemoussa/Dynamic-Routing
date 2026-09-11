import { createContext } from "react";

export interface User {
  id: string;
  username: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => console.warn("Login function"),
  logout: () => console.warn("Logout function")
});
