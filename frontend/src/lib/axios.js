import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatapp-nuhx.vercel.app" : "/api",
  withCredentials: true,
});
