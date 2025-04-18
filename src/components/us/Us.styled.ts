import styled, { keyframes } from "styled-components";

/* UsHeader.jsx -------- */
export const PageName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.06rem;
  width: 100%;
`;

/* UsRanking.tsx -------- */
export const Ranking = styled.div`
  display: inline-flex;
  padding: 0.4375rem 0.6875rem 0.75rem 0.8125rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const MyRanking = styled.div`
  display: flex;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.06rem;
`;

export const RankingText = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

/* UsMain.tsx ------- */
export const StepContainer = styled.div`
  margin-top: -2.5rem;
  height: auto;
`;

export const StepImage = styled.img`
  position: relative;
  margin: 0 auto;
  z-index: -10;
  width: 20rem;
  flex-shrink: 0;
`;

export const TextBox = styled.div`
  position: relative;
  margin: -12rem auto 9rem auto;
  padding-left: 0.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const Commt = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.02rem;
`;

/* UsStepCard -------- */
export const Bold = styled.span`
  font-weight: 700;
`;

export const UsBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -1.875rem auto 0 auto;
  width: calc(100% - 3rem);
  height: auto;
`;

export const Bottom1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  white-space: nowrap;
  display: inline-flex;
  height: 1.6rem;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.1875rem;
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendardx;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02rem;
  border-radius: 2.125rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
`;

export const CardImg = styled.img`
  margin-right: 0.1875rem;
  padding: 0.1875rem;
`;

export const MyCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 1.5rem;
  padding: 0.25rem 0.75rem;
  align-items: center;
`;

export const Point = styled.div`
  display: flex;
  height: 1.6rem;
  align-items: flex-start;
  flex-shrink: 0;
  padding: 0.25rem 0.75rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: right;
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

export const Bottom2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 23.75rem;
`;

export const StepGraph = styled.div`
  margin-top: 0.625rem;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 2.125rem;
  height: 1.4rem;
  padding: 0.25rem 0.75rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const widthAnimation = (width: string) => keyframes`
  from {
    width: 0px;
  }
  to {
    width: ${width};
  }
`;

interface StepBarProps {
  width: string;
}

export const StepBar = styled.div<StepBarProps>`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  height: 0.1875rem;
  flex-shrink: 0;
  animation: ${({ width }) => widthAnimation(width)} 1s ease forwards;
`;

export const StepImg = styled.img`
  width: 0.8rem;
`;

/* UsMarketContainer ------- */
export const UsMarketContainer = styled.div`
  margin: 0.8rem auto;
  width: calc(100% - 2.5rem);
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const MarketButton = styled.button`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
`;

export const MarketText = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const MarketImg = styled.img`
  width: 0.9rem;
`;

export const MarketList = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 1rem);
  margin-top: 0.625rem;
`;

export const MarketItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22%;
  aspect-ratio: 1;
  flex-shrink: 0;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};

  img {
    height: 90%;
  }
`;

export const MarketCommt = styled.div`
  margin: 0.3rem 0 0 0.6rem;
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: -0.03rem;
`;
