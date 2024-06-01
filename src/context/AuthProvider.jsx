import { createContext, useEffect, useMemo, useState } from "react";
import { userApi } from "../api/userApi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      userApi.defaults.headers["Authorization"] = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete userApi.defaults.headers["Authorization"];
    }
  }, [token]);

  const contextValue = useMemo(() => ({ token, setToken }), [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
