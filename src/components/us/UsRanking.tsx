import { useState } from "react";
import * as S from "./Us.styled";

const UsRanking = () => {
  const [myRanking, setMyRanking] = useState(50);
  return (
    <>
      <S.Ranking>
        <S.MyRanking>{myRanking}</S.MyRanking>
        <S.RankingText>나의 순위</S.RankingText>
      </S.Ranking>
    </>
  );
};

export default UsRanking;
