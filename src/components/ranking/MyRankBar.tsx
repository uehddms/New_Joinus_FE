import styled from "styled-components";
import cardIcon from "@assets/icons/cardicon.svg";

interface MyRankBarProps {
  rank: number;
  nickname: string;
  cardCount: number;
}

const MyRankBar = ({ rank, nickname, cardCount }: MyRankBarProps) => {
  const isTop3 = rank <= 3;
  return (
    <Wrapper>
      <RankBadge>내순위</RankBadge>
      <RankNumWrapper isTop3={isTop3}>
        <RankNum>{rank}</RankNum>
      </RankNumWrapper>
      <Nickname>{nickname}</Nickname>
      <CardInfo>
        <img src={cardIcon} alt="카드 아이콘" />
        <span>:</span>
        <CardCount>{cardCount}</CardCount>
      </CardInfo>
    </Wrapper>
  );
};

export default MyRankBar;

const Wrapper = styled.div`
  width: 95%;
  max-width: 440px;
  margin: 0 auto 12px auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  position: relative;
  bottom: 30px;
  z-index: 50;
`;

const RankBadge = styled.span`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: 12px;
  padding: 2px 10px;
  margin-right: 8px;
`;

const RankNumWrapper = styled.div<{ isTop3: boolean }>`
  background: ${({ theme, isTop3 }) =>
    isTop3 ? theme.colors.primaryColor : theme.colors.gray4};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const RankNum = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 18px;
  font-weight: 700;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 18px;
  font-weight: 700;
  img {
    width: 22px;
    height: 22px;
  }
`;

const CardCount = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 18px;
  font-weight: 700;
`;
