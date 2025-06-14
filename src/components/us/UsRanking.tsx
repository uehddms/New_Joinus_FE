import { useEffect, useState } from "react";
import * as S from "./Us.styled";
import { usApi } from "@api/us/UsApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UsRanking = () => {
  const [myRanking, setMyRanking] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await usApi.getUs();
      if (data) {
        setMyRanking(data.my_rank);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <S.Ranking>
            <S.MyRanking>
              <Skeleton width={"1.88rem"} height={"1.81rem"} />
            </S.MyRanking>
          </S.Ranking>
        </>
      ) : (
        <>
          <S.Ranking>
            <S.MyRanking>{myRanking}</S.MyRanking>
            <S.RankingText>나의 순위</S.RankingText>
          </S.Ranking>
        </>
      )}
    </>
  );
};

export default UsRanking;
