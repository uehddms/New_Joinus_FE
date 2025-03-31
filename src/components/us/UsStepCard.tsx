import { useState, useEffect } from "react";
import * as S from "./styled";
import card from "../../assets/img/us/card.svg";
import StepImg from "../../assets/img/us/stepImg.svg";

const UsBottom = () => {
  const [myCard, setMyCard] = useState<number>(2);
  const [point, setPoint] = useState<number>(10000);
  const [barWidth, setBarWidth] = useState<string>("0%");
  const [myStep, setMyStep] = useState<number>(2);

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
    setBarWidth(stepFunc(myStep));
  }, [myStep]);

  useEffect(() => {
    getUs();
  }, []);

  // 임시 함수 (API 연결 전)
  const getUs = () => {
    setMyCard(2);
    setPoint(10000);
    setMyStep(2);
  };

  return (
    <S.UsBottom>
      <S.Bottom1>
        <S.Card>
          <S.CardImg src={card} />
          누적 실천카드 개수 : <S.Bold>{myCard}</S.Bold>
        </S.Card>
        <S.Point>
          <S.Bold>{point}</S.Bold>P
        </S.Point>
      </S.Bottom1>
      <S.Bottom2>
        <S.StepGraph>
          <S.StepBar width={barWidth} />
          <S.StepImg src={StepImg} alt="단계 그래프" />
        </S.StepGraph>
      </S.Bottom2>
    </S.UsBottom>
  );
};

export default UsBottom;
