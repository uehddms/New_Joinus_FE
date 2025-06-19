import { ApiwithToken } from "@api/ApiWithToken";

export type currentThemeType = {
  current_theme: string;
};

export type updateThemeType = {
  message?: string;
  change_theme?: string;
};

export const ThemeApi = {
  getCurrentTheme: async () => {
    try {
      const response = await ApiwithToken.get("/users/changetheme/", {});
      // console.log("현재 테마:", response.data);

      return response.data;
    } catch (error) {
      console.error("현재 테마 get 실패:", error);
      return error;
    }
  },

  putTheme: async (putChangeTheme: { change_theme: string }) => {
    try {
      const response = await ApiwithToken.put(
        "/users/changetheme/",
        putChangeTheme
      );
      // console.log("테마 변경 put:", response.data);

      return response.data;
    } catch (error) {
      console.error("테마 변경 put 실패:", error);
      return error;
    }
  },
};
