import UserCardComponent from "@components/ranking/UserCardComponent";
import { UserHeader } from "@components/ranking/UserHeader";
import { ApiwithToken } from "@api/ApiWithToken";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RankUserPage = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<{
    rank: number;
    username: string;
    sharedcards: any[];
  } | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const response = await ApiwithToken.get(`ranking/sharelist/${id}`);
      setUserInfo(response.data.results);
    };
    fetch();
  }, [id]);

  if (!userInfo) return null; // 로딩 처리

  return (
    <>
      <UserHeader rank={userInfo.rank} username={userInfo.username} />
      <UserCardComponent sharedcards={userInfo.sharedcards} />
    </>
  );
};

export default RankUserPage;
