import * as S from "./Rankin.style";
// import card from "../../assets/image/card.png";

const RankUser = () => {
  return (
    <S.UserContainer>
      <S.RankScore>
        <S.GreenText>1</S.GreenText>
      </S.RankScore>
      <S.GreenText>조인어스조인어스</S.GreenText>
      <S.CardCountCotainer>
        {/* <img src={card} alt="카드 이미지" /> */}
        <S.Text>:</S.Text>
        <S.GreenText>93</S.GreenText>
      </S.CardCountCotainer>
      <S.GreenText>{">"}</S.GreenText>
    </S.UserContainer>
  );
};

export default RankUser;
