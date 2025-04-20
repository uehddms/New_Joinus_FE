import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import back from "../../assets/icons/back.svg";
import edit from "../../assets/icons/edit.svg";
import theme from "../../assets/icons/theme.svg";
import shopping from "../../assets/icons/shopping.svg";
import contact from "../../assets/icons/contact.svg";
import logout from "../../assets/icons/logout.svg";
import quit from "../../assets/icons/quit.svg";

interface MyHeaderProps {
  pageName: string;
}

const MyHeader: React.FC<MyHeaderProps> = ({ pageName }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/us");
  };

  const whatIcon = (pageName: string): string => {
    switch (pageName) {
      case "회원정보 수정":
        return edit;
      case "어스테마 바꾸기":
        return theme;
      case "구매목록":
        return shopping;
      case "문의하기":
        return contact;
      case "로그아웃":
        return logout;
      case "탈퇴":
        return quit;
      default:
        return edit;
    }
  };

  return (
    <S.MyHeaderContainer>
      <S.Back src={back} onClick={handleBack} />
      <S.PageIcon src={whatIcon(pageName)} />
      <S.PageName>{pageName}</S.PageName>
    </S.MyHeaderContainer>
  );
};

export default MyHeader;
