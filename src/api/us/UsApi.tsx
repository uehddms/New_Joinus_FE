// import { ApiwithToken } from "@api/ApiWithToken";
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_SERVER_API;

export type usAPI = {
  username: string;
  my_rank: number;
  current_theme: string;
  points: number;
  daily_message: string;
  total_cards: number;
  available_items: {
    item_name: string;
    price: number;
    id: number;
  }[];
};

// 토큰 가져오기
const getToken = () => {
  const token = Cookies.get("access_token");
  //   console.log("가져온 토큰:", token);
  return token;
};

// 토큰을 헤더에 추가
const getAuthHeader = () => {
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  };
  //   console.log("생성된 헤더:", headers);
  return headers;
};

export const usApi = {
  getUs: async () => {
    try {
      const headers = getAuthHeader();
      const response = await axios.get(`${baseURL}/api/profile`, { headers });
      console.log("us 정보 데이터:", response.data);
      if (response.data.result) {
        return [response.data.result];
      }
      return [];
    } catch (error) {
      console.error("us 정보 받아오기 실패:", error);
      return [];
    }
  },
  //
  //   getUs: async () => {
  //     try {
  //       const response = await ApiwithToken.get("/api/profile", {});
  //       console.log("유저 정보 데이터:", response.data);
  //       if (response.data) {
  //         return [response.data];
  //       }
  //       return [];
  //     } catch (error) {
  //       console.error("유저 정보 받아오기 실패:", error);
  //       return [];
  //     }
  //   },
};
