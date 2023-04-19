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
    } catch (error) {
      return error.response.data;
    }
  },
});

export default useApi;
