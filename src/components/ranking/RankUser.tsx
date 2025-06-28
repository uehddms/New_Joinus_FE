import * as S from "./Rankin.style";
import cardIcon from "@assets/icons/cardicon.svg";
import rightIcon from "@assets/icons/chevron-right.svg";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

interface RankUserProps {
  rank: number;
  nickname: string;
  cardCount: number;
  id: number;
}

const RankUser = ({ rank, nickname, cardCount, id }: RankUserProps) => {
  const theme = useTheme();
  // 1~3위: primaryColor, 4위 이상: gray4
  const isTop3 = rank <= 3;
  return (
    <S.UserContainer>
      <S.RankScore
        style={{
          backgroundColor: isTop3
            ? theme.colors.primaryColor
            : theme.colors.gray4,
        }}
      >
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>
          {rank}
        </span>
      </S.RankScore>
      <S.GreenText>{nickname}</S.GreenText>
      <S.CardCountCotainer>
        <img
          src={cardIcon}
          alt="카드 아이콘"
          style={{ width: 22, height: 22 }}
        />
        <S.Text>:</S.Text>
        <S.GreenText>{cardCount}</S.GreenText>
      </S.CardCountCotainer>
      <Link to={`/rank/user/${id}`}>
        <img src={rightIcon} alt=">" />
      </Link>
    </S.UserContainer>
  );
};

export default RankUser;
