import { ApiwithToken } from "@api/ApiWithToken";

export type currentUsernameType = {
  current_username: string;
};

export type updateUsernameType = {
  message?: string;
  username?: string;
};

export const InfoEditApi = {
  getCurrentUsername: async () => {
    try {
      const response = await ApiwithToken.get("/users/usernameupdate/", {});
      // console.log("현재 닉네임:", response.data);

      return response.data;
    } catch (error) {
      console.error("현재 닉네임 get 실패:", error);
      return error;
    }
  },

  putUserName: async (putUpdateUsername: { username: string }) => {
    try {
      const response = await ApiwithToken.put(
        "/users/usernameupdate/",
        putUpdateUsername
      );
      // console.log("닉네임 변경 post:", response.data);

      return response.data;
    } catch (error) {
      console.error("닉네임 변경 put 실패:", error);
      return error;
    }
  },
};
