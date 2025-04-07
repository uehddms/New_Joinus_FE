
import styled from "styled-components";
import * as S from "./detail.styled";
import card from "@assets/image/cardContainer.png";
import test from "@assets/image/testimg.png";
import leaf from "@assets/icons/leaf.png";
import more from "@assets/icons/more-horizontal.svg";
import { useState } from "react";

const CardDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Wrapper>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" className="card-frame" />
        <img src={test} alt="사용자 추가 이미지" className="user-image" />

        <S.ContentContainer>
          <S.Container>
            <S.PointContainer>
              <img src={leaf} alt="point 로고" />
              <p>gdgdgd</p>
            </S.PointContainer>
            <img src={more} alt="옵션 탭 열기" />
          </S.Container>
        </S.ContentContainer>
        <S.Title isExpanded={isExpanded}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          similique aliquam quasi atque ut quia. Vel dolores delectus sapiente
          non earum. Repellendus voluptates rerum in provident labore neque
          dolorum ducimus?
        </S.Title>
        <S.Button onClick={handleToggleText}>
          {isExpanded ? "접기" : "...더보기"}
        </S.Button>
      </S.CardContainer>
    </Wrapper>
  );
};

export default CardDetail;

const Wrapper = styled.section`
  width: 80%;

  display: flex;
  justify-content: center;
`;
