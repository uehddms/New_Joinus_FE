import goLeft from "@assets/icons/goLeft.png";
import { Link } from "react-router-dom";
import * as S from "./detail.styled";

const DetailHeader = () => {
  return (
    <S.Wrapper>
      <Link to="/share">
        <img src={goLeft} alt="뒤로 가기 버튼" />
      </Link>
      <p>조인어스</p>
    </S.Wrapper>
  );
};

export default DetailHeader;
