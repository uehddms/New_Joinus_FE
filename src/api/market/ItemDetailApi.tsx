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

export type itemDetailPostType = {
  message: number;
};

export const itemDetailApi = {
  getItemDetail: async (id: number) => {
    try {
      const response = await ApiwithToken.get(`market/item/${id}`, {});
      // console.log("item detail 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("item detail 데이터 받아오기 실패:", error);
      return [];
    }
  },

  // 아이템 구매
  postItemDetail: async (id: number, postItemId: { item: number }) => {
    try {
      const response = await ApiwithToken.post(
        `market/item/${id}/`,
        postItemId
      );
      // console.log("item detail post 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("item detail 데이터 post 실패:", error);
      return [];
    }
  },

  // 아이템 다운로드
  downloadItem: async (id: number) => {
    try {
      const response = await ApiwithToken.get(`market/item/${id}/download/`);
      // console.log("item detail download 데이터: ", response.data);

      return response.data;
    } catch (error) {
      console.error("다운로드 실패:", error);
      throw error;
    }
  },
};
