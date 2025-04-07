import styled from "styled-components";
import * as S from "./detail.styled";
import card from "@assets/image/cardContainer.png";
import test from "@assets/image/testimg.png";
const CardDetail = () => {
  return (
    <Wrapper>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자 추가 이미지" />
      </S.CardContainer>
    </Wrapper>
  );
};

export default CardDetail;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;
