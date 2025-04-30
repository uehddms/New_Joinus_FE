import BackBtn from "@assets/icons/back.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const MarketHeader = () => {
  const navigate = useNavigate();

  const backClick = () => {
    navigate("/us");
  };

  const point = 1000;

  return (
    <MarketHeaderContainer>
      <BackTitleContainer>
        <BackImg src={BackBtn} onClick={backClick} />
        <Title>마켓</Title>
      </BackTitleContainer>
      <Point>{point}</Point>
    </MarketHeaderContainer>
  );
};

export default MarketHeader;

const MarketHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
`;

const BackTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const BackImg = styled.img``;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.06rem;
`;

const Point = styled.div`
  display: inline-flex;
  height: 1.75rem;
  padding: 0.25rem 0.75rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: var(--Primary-color, #4f8d64);
  text-align: right;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.04rem;

  &::after {
    content: "P";
    font-weight: 400;
  }
`;
