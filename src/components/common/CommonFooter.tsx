import * as S from "./CommonFooter.styled";
// import JoinActive from "@assets/icons/JoinActive.svg";
import Join from "@assets/icons/Join.svg";
import JoinActive from "@assets/icons/JoinActive.svg";
import Us from "@assets/icons/Us.svg";
import UsActive from "@assets/icons/UsActive.svg";
import Share from "@assets/icons/Share.svg";
import ShareActive from "@assets/icons/ShareActive.svg";
import Rank from "@assets/icons/Rank.svg";
import RankActive from "@assets/icons/RankActive.svg";
import { useLocation, useNavigate } from "react-router-dom";

export const CommonFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isJoinActive =
    currentPath === "/join" ||
    currentPath.startsWith("/post") ||
    currentPath.startsWith("/detail");

  return (
    <S.FooterWrapper>
      <S.Container>
        <S.JoinContainer
          onClick={() => handleNavigation("/join")}
          isActive={isJoinActive}
        >
          <S.JoinImg src={isJoinActive ? JoinActive : Join} />
          <span>조인</span>
        </S.JoinContainer>
        <S.UsContainer
          onClick={() => handleNavigation("/us")}
          isActive={currentPath === "/us"}
        >
          <S.UsImg src={currentPath === "/us" ? UsActive : Us} />
          <span>어스</span>
        </S.UsContainer>
        <S.ShareContainer
          onClick={() => handleNavigation("/share")}
          isActive={currentPath === "/share"}
        >
          <S.ShareImg src={currentPath === "/share" ? ShareActive : Share} />
          <span>공유</span>
        </S.ShareContainer>
        <S.RankContainer
          onClick={() => handleNavigation("/rank")}
          isActive={currentPath === "/rank"}
        >
          <S.RankImg src={currentPath === "/rank" ? RankActive : Rank} />
          <span>랭킹</span>
        </S.RankContainer>
      </S.Container>
    </S.FooterWrapper>
  );
};
