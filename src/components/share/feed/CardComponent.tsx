import styled from "styled-components";
import card from "@assets/image/cardContainer.png";
import test from "@assets/image/testimg.png";
import * as S from "./share.styled";
import leaf from "@assets/icons/leaf.png";

const CardComponent = () => {
  return (
    <Wrapper>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer>
    </Wrapper>
  );
};

export default CardComponent;

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  padding: 1rem;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
