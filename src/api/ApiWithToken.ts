import axios from "axios";
import Cookies from "js-cookie";

export const ApiwithToken = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${Cookies.get("access_token")}`,
  },
});
