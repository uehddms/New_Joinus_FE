import { useState } from "react";
import * as S from "./Us.styled";
import step0 from "../../assets/image/us/step0.svg";
import step1 from "../../assets/image/us/step1.svg";
import step2 from "../../assets/image/us/step2.svg";
import step3 from "../../assets/image/us/step3.svg";
import step4 from "../../assets/image/us/step4.svg";
import step1Pink from "../../assets/image/us/step1Pink.svg";
import step2Pink from "../../assets/image/us/step2Pink.svg";
import step3Pink from "../../assets/image/us/step3Pink.svg";
import step4Pink from "../../assets/image/us/step4Pink.svg";

const UsRanking = () => {
  const [myCard, setMyCard] = useState(2);
  const [myStep, setMyStep] = useState(2);
  const [currentTheme, setCurrentTheme] = useState("");
  const [myName, setMyName] = useState("이름");

  const getStepImage = () => {
    if (myCard == 0) return step0;

    const themeImages =
      currentTheme == "어스 벚꽃테마"
        ? [step1Pink, step2Pink, step3Pink, step4Pink]
        : [step1, step2, step3, step4];

    return themeImages[myStep - 1] || step1;
  };
  return (
    <>
      <S.StepContainer>
        <S.StepImage src={getStepImage()} />
        <S.TextBox>
          <S.Name>{myName} 님</S.Name>
          <S.Commt>
            당신이 있어서
            <br />
            세상이 더 아름다워요.
          </S.Commt>
        </S.TextBox>
      </S.StepContainer>
    </>
  );
};

export default UsRanking;
