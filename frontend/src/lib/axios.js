import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
  import.meta.env.MODE === "development"
    ? "http://localhost:5000" // your local backend when developing
    : "https://chatapp-nuhx.vercel.app", // backend URL on production
withCredentials: true,

});
