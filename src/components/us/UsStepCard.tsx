import { useState, useEffect } from "react";
import * as S from "./Us.styled";
import card from "../../assets/image/us/card.svg";
import StepImg from "../../assets/image/us/stepImg.svg";
import { usApi } from "@api/us/UsApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UsBottom = () => {
  const [myCard, setMyCard] = useState<number | undefined>(2);
  const [point, setPoint] = useState<number | undefined>(10000);
  const [barWidth, setBarWidth] = useState<string>("0%");
  const [myStep, setMyStep] = useState<number | undefined>(2);
  const [isLoading, setIsLoading] = useState(false);

  const stepFunc = (myStep: number): string => {
    switch (myStep) {
      case 0:
        return "0%";
      case 1:
        return "23%";
      case 2:
        return "48%";
      case 3:
        return "71%";
      default:
        return "95%";
    }
  };

  useEffect(() => {
    if (myStep) {
      setBarWidth(stepFunc(myStep));
    }
  }, [myStep]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await usApi.getUs();
        if (data) {
          setMyCard(data.total_cards);
          setPoint(data.points);
          setMyStep(data.step);
        }
      } catch (error) {
        console.error("어스 step card 가져오기 실패: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <S.UsBottom>
      {isLoading ? (
        <>
          <S.Bottom1>
            <S.Card>
              <Skeleton width={"100%"} />
            </S.Card>
            <S.Point>
              <Skeleton width={"100%"} />
            </S.Point>
          </S.Bottom1>

          <S.StepGraph></S.StepGraph>
        </>
      ) : (
        <>
          <S.Bottom1>
            <S.Card>
              <S.CardImg src={card} />
              누적 실천카드 개수 : <S.Bold>{myCard}</S.Bold>
            </S.Card>
            <S.Point>
              <S.Bold>{point}</S.Bold>P
            </S.Point>
          </S.Bottom1>

          <S.StepGraph>
            <S.StepBar width={barWidth} />
            <S.StepImg src={StepImg} alt="단계 그래프" />
          </S.StepGraph>
        </>
      )}
    </S.UsBottom>
  );
};

export default UsBottom;
