import axios from "axios";
import Cookies from "js-cookie";

export const ApiwithToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터로 토큰을 항상 동적으로 불러오기
ApiwithToken.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
