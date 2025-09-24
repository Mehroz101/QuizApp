import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://quiz-app-topaz-nine-94.vercel.app",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
