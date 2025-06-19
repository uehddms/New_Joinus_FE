import { ApiwithToken } from "@api/ApiWithToken";

export type logoutType = {
  message?: string;
  detail?: string;
};

export const logoutApi = {
  postLogout: async () => {
    try {
      const response = await ApiwithToken.post("/users/logout/", {});
      // console.log("로그아웃 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("로그아웃 데이터 post 실패:", error);
      return error;
    }
  },
};
