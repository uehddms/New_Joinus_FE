import { ApiwithToken } from "@api/ApiWithToken";

export const ShoppingApi = {
  getShopping: async () => {
    try {
      const response = await ApiwithToken.get("/users/orderlist/");
      // console.log("쇼핑목록 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("쇼핑목록 데이터 get 실패:", error);
      return error;
    }
  },
};
