import { ApiwithToken } from "@api/ApiWithToken";

export type itemListType = {
  points: 0;
  item: [
    {
      item_name: string;
      price: number;
      id: number;
    },
    []
  ];
};

export const itemListApi = {
  getItemList: async () => {
    try {
      const response = await ApiwithToken.get("/market/itemlist/", {});
      console.log("item list 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("item list 데이터 받아오기 실패:", error);
      return [];
    }
  },
};
