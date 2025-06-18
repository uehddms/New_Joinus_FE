import { ApiwithToken } from "@api/ApiWithToken";

export const shareApi = {
  getShare: async ({
    order,
    only_this_month,
    cursor,
    page_size = 20,
  }: {
    order: string;
    only_this_month: boolean;
    cursor?: string;
    page_size: number;
  }) => {
    try {
      const params: any = {
        order,
        only_this_month,
        page_size,
      };
      if (cursor !== undefined && cursor !== null) {
        params.cursor = cursor;
      }
      const response = await ApiwithToken.get("/share/sharedcards", {
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Share 데이터 받아오기 실패:", error);
      return [];
    }
  },
  getShareDetail: async ({ id }: { id: number }) => {
    const response = await ApiwithToken.get(`/share/sharedcards/${id}`);
    return response.data;
  },
  getMyShare: async ({
    are_targets_stored,
    cursor,
    page_size = 20,
  }: {
    are_targets_stored: boolean;
    cursor?: string;
    page_size: number;
  }) => {
    const response = await ApiwithToken.get("sharedcards/my/", {
      params: { are_targets_stored, cursor, page_size },
    });
    return response.data;
  },
};
