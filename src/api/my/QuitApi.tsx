import { ApiwithToken } from "@api/ApiWithToken";

export type quitType = {
  message?: string;
  detail?: string;
};

export const QuitApi = {
  deleteQuit: async () => {
    try {
      const response = await ApiwithToken.delete("/users/delete/", {});
      console.log("탈퇴 데이터:", response.data);

      return response.data;
    } catch (error) {
      console.error("탈퇴 데이터 delete 실패:", error);
      return error;
    }
  },
};
