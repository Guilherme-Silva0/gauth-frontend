import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_REACT_API_URL });

const useApi = () => ({
  createUser: async (user) => {
    try {
      const res = await api.post("/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      });
      return res.data.insertId;
    } catch (err) {
      return err.response.data;
    }
  },
  confirmCode: async (confirmation_code) => {
    try {
      const res = await api.put(`/register/confirm/${confirmation_code}`);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  },
  authenticateUser: async (user) => {
    try {
      const res = await api.post("/login", user);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getUser: async (token) => {
    try {
      const res = await api.get("/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      if (err.message === "Network Error") return { error: true };
      return err.response.data;
    }
  },
  passwordRecovery: async (email) => {
    try {
      const res = await api.put("/password_recovery", email);
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
  updatePassword: async (values) => {
    try {
      const res = await api.put(
        `/password_recovery/${values.confirmation_code}`,
        { password: values.password }
      );
      return res.data;
    } catch (error) {
      return error.response.data;
    }
  },
});

export default useApi;
