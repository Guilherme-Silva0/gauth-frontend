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
});

export default useApi;
