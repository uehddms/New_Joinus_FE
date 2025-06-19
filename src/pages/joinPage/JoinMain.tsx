import * as S from "./JoinMain.styled";
import ImgBox from "../../assets/icons/ImgBox.svg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { ApiwithToken } from "@api/ApiWithToken";

export const JoinMain = () => {
  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const fetchTutorial = async () => {
      const response = await ApiwithToken.get(`join/tutorial/`);
      console.log(response.data);
      setComplete(response.data.tutorial_completed);
    };
    fetchTutorial();
  }, []);

  const goTutorial = () => {
    if (complete === false) {
      navigate("/ex");
    } else {
      navigate("/upload");
    }
  };

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.ImgBox src={ImgBox} />
      </S.ImgWrapper>
      <S.Text>
        카드를&nbsp;<span>클릭해</span>&nbsp;이번달 실천카드를 확인해보세요!
      </S.Text>
      <S.MonthContainer>
        <S.Month>
          <span>예시</span>
        </S.Month>
      </S.MonthContainer>
      <S.MakeBtn onClick={goTutorial}>
        <span>실천카드 만들러 가기</span>
      </S.MakeBtn>
    </S.Wrapper>
  );
};
