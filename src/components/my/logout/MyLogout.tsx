import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const MyLogout = () => {
  const navigate = useNavigate();
  return (
    <S.MyLogoutContainer>
      <S.ModalContainer>
        <S.Title>로그아웃 하시겠습니까?</S.Title>
        <S.BtnContainer>
          <S.GreyBtn onClick={() => navigate("/")}>네</S.GreyBtn>
          <S.GreenBtn onClick={() => navigate("/us")}>아니요</S.GreenBtn>
        </S.BtnContainer>
      </S.ModalContainer>
    </S.MyLogoutContainer>
  );
};

export default MyLogout;
