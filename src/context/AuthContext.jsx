import { createContext, useState } from "react";
import useApi from "../hooks/useApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const api = useApi();

  const createUser = async (user) => {
    const res = await api.createUser(user);
    setUser(user);
    return res;
  };

  return (
    <AuthContext.Provider value={{ createUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};
