import styled, { keyframes } from "styled-components";

/* UsHeader.jsx -------- */
export const PageName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
  width: 100%;
`;

/* UsRanking.tsx -------- */
export const Ranking = styled.div`
  display: inline-flex;
  padding: 7px 11px 12px 13px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const MyRanking = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 80px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const RankingText = styled.div`
  color: var(--Gray5, #2e302d);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
`;

/* UsMain.tsx ------- */
export const StepContainer = styled.div``;
export const StepImage = styled.img`
  position: relative;
  margin: 0 auto;
  z-index: -10;
  width: 350px;
  flex-shrink: 0;
`;
export const TextBox = styled.div`
  position: relative;
  margin: -200px auto 130px auto;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
`;
export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Commt = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.56px;
`;

/* UsStepCard -------- */
export const Bold = styled.span`
  font-weight: 700;
`;
export const UsBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bottom1 = styled.div`
  display: flex;
  justify-content: space-between; // 좌우 정렬
  align-items: center;
  width: calc(100% - 20px);
  gap: 8px;
`;

export const Card = styled.div`
  white-space: nowrap; // 텍스트 줄바꿈 방지
  display: inline-flex;
  height: 28px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendardx;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
`;
export const CardImg = styled.img`
  margin-right: 3px;
  padding: 3px;
`;

export const MyCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 34px;
  padding: 4px 12px;
  align-items: center;
`;

export const Point = styled.div`
  margin-left: auto; // 오른쪽으로 정렬
  display: flex;
  height: 28px;
  align-items: flex-start;
  flex-shrink: 0;
  display: flex;
  height: 28px;
  padding: 4px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Bottom2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  max-width: 380px;
`;

export const StepGraph = styled.div`
  margin-top: 10px;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 34px;
  height: 24px;
  padding: 4px 12px;
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
  background-color: #417e59;
  height: 3px;
  flex-shrink: 0;
  animation: ${({ width }) => widthAnimation(width)} 1s ease forwards;
`;

export const StepImg = styled.img``;

/* UsMarketContainer ------- */
export const UsMarketContainer = styled.div`
  margin: 15px auto;
  width: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
export const MarketButton = styled.button`
  display: inline-flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 80px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
`;
export const MarketText = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const MarketImg = styled.img`
  width: 17px;
`;
export const MarketList = styled.div`
  display: flex;
  gap: 11px;
  margin-top: 10px;
`;
export const MarketItem = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
`;
export const MarketCommt = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: -0.48px;
`;
