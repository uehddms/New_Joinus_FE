import RankingHeader from "@components/ranking/RankingHeader";
import RankUser from "@components/ranking/RankUser";
import { ApiwithToken } from "@api/ApiWithToken";
import { useEffect, useState } from "react";
import Notification from "@components/ranking/Notification";
import MyRankBar from "@components/ranking/MyRankBar";

const RankPage = () => {
  const [data, setData] = useState([]);
  const [myRank, setMyRank] = useState(0);
  const [myCardCount, setMyCardCount] = useState(0);
  const [myUsername, setMyUsername] = useState("");
  const [isnoti, setIsnoti] = useState<boolean>(false);
  const fetch = async () => {
    const response = await ApiwithToken.get("ranking/main/");
    setData(response.data.top_20);
    setIsnoti(response.data.notification);
    setMyRank(response.data.my_rank);
    setMyCardCount(response.data.my_card_count);
    setMyUsername(response.data.my_username);
  };
  useEffect(() => {
    fetch();
    console.log(data);
  }, []);
  return (
    <>
      <RankingHeader />
      {isnoti && <Notification onClose={() => setIsnoti(false)} />}
      {data.map((item: any) => (
        <RankUser
          rank={item.rank}
          nickname={item.username}
          cardCount={item.card_count}
          id={item.user_id}
        />
      ))}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 70,
          zIndex: 100,
        }}
      >
        <MyRankBar
          rank={myRank}
          nickname={myUsername}
          cardCount={myCardCount}
        />
      </div>
    </>
  );
};

export default RankPage;
