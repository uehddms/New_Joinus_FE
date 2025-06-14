import { ApiwithToken } from "@api/ApiWithToken";

export type usApiType = {
  username: string;
  my_rank: number;
  current_theme: string;
  points: number;
  step: number;
  daily_message: string;
  total_cards: number;
  available_items?: {
    item_name: string;
    price: number;
    id: number;
  }[];
};

export const usApi = {
  getUs: async () => {
    try {
      const response = await ApiwithToken.get("/us/main/", {});
      // console.log("Us 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("Us 데이터 받아오기 실패:", error);
      return [];
    }
  },
};
