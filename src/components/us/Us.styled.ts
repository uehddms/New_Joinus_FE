import styled, { keyframes } from "styled-components";

/* UsHeader.jsx -------- */
export const PageName = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.06rem;
  width: 100%;
`;

/* UsRanking.tsx -------- */
export const Ranking = styled.div`
  margin: 0 auto;
  display: flex;
  /* width: 3.5625rem; */
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
`;

export const MyRanking = styled.div`
  min-width: 3.125rem;
  height: 3.0625rem;

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
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.06rem;
`;

export const RankingText = styled.div`
  align-self: stretch;

  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

/* UsMain.tsx ------- */
interface StepBackgroundProps {
  url?: string;
}

export const StepBackground = styled.div<StepBackgroundProps>`
  margin: 0;

  display: flex;
  width: 23.60631rem;
  height: 23.60631rem;
  padding: 10.1875rem 7.375rem 8.1875rem 8.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex-shrink: 0;

  background-image: url(${({ url }) => url});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const TextBox = styled.div`
  display: flex;
  width: 7.0625rem;
  height: 5.125rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const Commt = styled.span`
  width: 7.25rem;
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.035rem;
`;

/* UsStepCard -------- */
export const Bold = styled.span`
  font-weight: 700;
`;

export const UsBottom = styled.div`
  margin: 0 auto;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Bottom1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Card = styled.div`
  display: flex;
  height: 1.75rem;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

export const CardImg = styled.img`
  width: 1rem;
  height: 1.15156rem;
`;

export const Point = styled.div`
  display: flex;
  height: 1.75rem;
  padding: 0.25rem 0.75rem;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;

  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};

  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: right;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

export const StepGraph = styled.div`
  width: 100%;
  height: 1.5rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  background: ${({ theme }) => theme.colors.gray1};

  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
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
  height: 2.5px;
  flex-shrink: 0;
  animation: ${({ width }) => widthAnimation(width)} 1s ease forwards;
`;

export const StepImg = styled.img`
  width: 0.9rem;
`;

/* UsMarketContainer ------- */
export const UsMarketContainer = styled.div`
  margin: 1.25rem auto;
  width: 90%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.05rem;
`;

export const MarketImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const MarketList = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;

  margin-top: 0.625rem;
`;

export const MarketItem = styled.div`
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;

  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  overflow: hidden;
  flex-shrink: 0;

  img {
    height: 90%;
  }
`;

export const MarketCommt = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.03rem;
  /* margin: 0.3rem 0 0 0.6rem;
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: -0.03rem; */
`;
