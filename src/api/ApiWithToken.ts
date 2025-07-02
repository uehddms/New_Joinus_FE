import axios from "axios";
import Cookies from "js-cookie";

export const ApiwithToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiwithToken.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});
