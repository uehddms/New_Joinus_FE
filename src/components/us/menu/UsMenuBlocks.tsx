import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import edit from "../../../assets/icons/edit.svg";
import theme from "../../../assets/icons/theme.svg";
import shopping from "../../../assets/icons/shopping.svg";
import contact from "../../../assets/icons/contact.svg";
import logout from "../../../assets/icons/logout.svg";
import quit from "../../../assets/icons/quit.svg";

const UsMenuBlocks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.MenuSectionBox>
      <S.MenuSection>
        <S.MenuHover onClick={() => navigate("/myEdit")}>
          <S.Img src={edit} />
          <S.Text>회원정보 수정</S.Text>
        </S.MenuHover>
      </S.MenuSection>
      <S.Line />
      <S.MenuSection>
        <S.MenuHover onClick={() => navigate("/myTheme")}>
          <S.Img src={theme} />
          <S.Text>어스 테마 바꾸기</S.Text>
        </S.MenuHover>
      </S.MenuSection>
      <S.Line />
      <S.MenuSection>
        <S.MenuHover onClick={() => navigate("/myShopping")}>
          <S.Img src={shopping} />
          <S.Text>구매목록</S.Text>
        </S.MenuHover>
      </S.MenuSection>
      <S.Line />
      <S.MenuSection>
        <S.MenuHover onClick={() => navigate("/myContact")}>
          <S.Img src={contact} />
          <S.Text>문의하기</S.Text>
        </S.MenuHover>
      </S.MenuSection>
      <S.Line />
      <S.MenuSection>
        <S.MenuHover onClick={() => navigate("/myLogout")}>
          <S.Img src={logout} />
          <S.Text>로그아웃</S.Text>
        </S.MenuHover>
      </S.MenuSection>
      <S.Line />
      <S.MenuSection>
        <S.MenuHover onClick={() => navigate("/myQuit")}>
          <S.Img src={quit} />
          <S.Text>탈퇴</S.Text>
        </S.MenuHover>
      </S.MenuSection>
    </S.MenuSectionBox>
  );
};

export default UsMenuBlocks;
