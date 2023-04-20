import { createContext, useState } from "react";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const api = useApi();
  const navigate = useNavigate();

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

  const verifyAuth = async () => {
    const token = localStorage.getItem("token");
    const res = await api.getUser(token);
    if (res.error === true) {
      if (token) {
        localStorage.removeItem("token");
      }
      return navigate("/login");
    }
    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
    navigate("/login");
  };

  const passwordRecovery = async (email) => {
    const res = await api.passwordRecovery(email);
    return res;
  };

  const updatePassword = async (values) => {
    const res = await api.updatePassword(values);
    return res;
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        confirmCode,
        authenticateUser,
        verifyAuth,
        logout,
        passwordRecovery,
        updatePassword,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
