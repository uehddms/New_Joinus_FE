import { shareApi } from "@api/share/ShareApi";
import CardDetail from "@components/share/detail/CardDetail";
import CommentBox from "@components/share/detail/CommentBox";
import DetailHeader from "@components/share/detail/DetailHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Data {
  id: number;
  author_info: {
    user_id: number;
    username: string;
  };
  cardpost: {
    id: number;
    keyword: string;
    small_image_url: string;
    large_image_url: string;
    created_at: string;
  };
  description: string;
  is_liked: boolean;
  is_pinned: boolean;
  created_at: string;
}

const FeedDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<Data>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await shareApi.getShareDetail({ id: Number(id) });
      setData(response);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <DetailHeader data={data?.author_info.username || ""} />
      <CardDetail data={data} id={id || ""} setData={setData} />
      <CommentBox id={id || ""} />
    </>
  );
};

export default FeedDetailPage;
