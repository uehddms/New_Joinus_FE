import { useState, useEffect } from "react";
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
import { usApi } from "@api/us/UsApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UsRanking = () => {
  const [myName, setMyName] = useState<string>("");
  const [dailyMessage, setDailyMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await usApi.getUs();
      if (data) {
        const themeImages =
          data.current_theme === "어스 벚꽃테마"
            ? [step1Pink, step2Pink, step3Pink, step4Pink]
            : [step1, step2, step3, step4];

        const img =
          data.total_cards === 0 ? step0 : themeImages[data.step - 1] || step1;

        setMyName(data.username);
        setDailyMessage(data.daily_message);
        setImageUrl(img);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // const getStepImage = () => {
  //   if (myCard === 0) return step0;

  //   const themeImages =
  //     currentTheme == "어스 벚꽃테마"
  //       ? [step1Pink, step2Pink, step3Pink, step4Pink]
  //       : [step1, step2, step3, step4];

  //   return themeImages[myStep - 1] || step1;
  // };

  // useEffect(() => {
  //   setImageUrl(getStepImage());
  // }, []);

  return (
    <>
      {isLoading ? (
        <>
          <S.StepBackground>
            <S.TextBox>
              <Skeleton width={"100%"} />
            </S.TextBox>
          </S.StepBackground>
        </>
      ) : (
        <>
          <S.StepBackground url={imageUrl}>
            <S.TextBox>
              <S.Name>{myName} 님</S.Name>
              <S.Commt>{dailyMessage}</S.Commt>
            </S.TextBox>
          </S.StepBackground>
        </>
      )}
    </>
  );
};

export default UsRanking;
