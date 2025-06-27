import { ApiwithToken } from "@api/ApiWithToken";

export type itemDetailType = {
  points: number;
  item_name: string;
  price: number;
  description: string;
  note: string;
  id: number;
  button_text: string;
};

export const itemDetailApi = {
  getItemDetail: async (id: number) => {
    try {
      const response = await ApiwithToken.get(`market/item/${id}`, {});
      console.log("item detail 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("item detail 데이터 받아오기 실패:", error);
      return [];
    }
  },
};
