import goLeft from "@assets/icons/goLeft.png";
import { useNavigate } from "react-router-dom";
import * as S from "./detail.styled";

const DetailHeader = ({ data }: { data: string }) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <div onClick={() => navigate(-1)}>
        <img src={goLeft} alt="뒤로 가기 버튼" />
      </div>
      <p>{data}</p>
    </S.Wrapper>
  );
};

export default DetailHeader;
