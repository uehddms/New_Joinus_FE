import * as S from "./CommonFooter.styled";
// import JoinActive from "@assets/icons/JoinActive.svg";
import Join from "@assets/icons/Join.svg";
import Us from "@assets/icons/Us.svg";
import Share from "@assets/icons/Share.svg";
import Rank from "@assets/icons/Rank.svg";

export const CommonFooter = () => {

    return (
        <S.Container>
            <S.JoinContainer>
                <S.JoinImg src={Join} />
                <span>조인</span>
            </S.JoinContainer>
            <S.UsContainer>
                <S.UsImg src={Us} />
                <span>어스</span>
            </S.UsContainer>
            <S.ShareContainer>
                <S.ShareImg src={Share} />
                <span>공유</span>
            </S.ShareContainer>
            <S.RankContainer>
                <S.RankImg src={Rank} />
                <span>랭킹</span>
            </S.RankContainer>
        </S.Container>
    );
};