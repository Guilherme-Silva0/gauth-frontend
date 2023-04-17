import { createContext, useState } from "react";
import useApi from "../hooks/useApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const api = useApi();

  const createUser = async (user) => {
    const res = await api.createUser(user);
    return res;
  };

  const confirmCode = async (confirmation_code) => {
    const res = await api.confirmCode(confirmation_code);
    return res;
  };

  const authenticateUser = async (user) => {
    const res = await api.authenticateUser(user);
    return res;
  };

  return (
    <AuthContext.Provider
      value={{ createUser, confirmCode, authenticateUser, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
