import goLeft from "@assets/icons/goLeft.png";

import * as S from "./detail.styled";

const DetailHeader = () => {
  return (
    <S.Wrapper>
      <img src={goLeft} alt="뒤로 가기 버튼" />
      <p>조인어스</p>
    </S.Wrapper>
  );
};

export default DetailHeader;
