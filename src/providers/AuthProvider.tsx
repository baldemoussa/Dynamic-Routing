import { useState, type ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({id: "101", username: "SoloDev101"});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string) => {
    setUser({ id: username, username });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser({ id: "", username: "" });
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
