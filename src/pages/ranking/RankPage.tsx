import RankingHeader from "@components/ranking/RankingHeader";
import RankUser from "@components/ranking/RankUser";
import { ApiwithToken } from "@api/ApiWithToken";
import { useEffect, useState } from "react";

const RankPage = () => {
  const [data, setData] = useState([]);
  const [isnoti, setIsnoti] = useState<boolean>(false);
  const fetch = async () => {
    const response = await ApiwithToken.get("ranking/main/");
    setData(response.data.top_20);
    setIsnoti(response.data.notification);
  };
  useEffect(() => {
    fetch();
    console.log(data);
  }, []);
  return (
    <>
      <RankingHeader />
      {data.map((item: any) => (
        <RankUser
          rank={item.rank}
          nickname={item.username}
          cardCount={item.card_count}
          id={item.user_id}
        />
      ))}
      {isnoti && <div>알림</div>}
    </>
  );
};

export default RankPage;
