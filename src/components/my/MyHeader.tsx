import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
    <MyHeaderContainer>
      <BackImg src={back} onClick={handleBack} />
      <PageIcon src={whatIcon(pageName)} />
      <PageName>{pageName}</PageName>
    </MyHeaderContainer>
  );
};

export default MyHeader;

const MyHeaderContainer = styled.div`
  /* display: flex;
  width: 12.5rem;
  justify-content: left;
  align-items: center;
  gap: 0.9375rem;
  flex-shrink: 0;
  margin: 1.25rem 0 0 3.75rem; */
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: center;
  padding: 0 1.25rem;
  gap: 0.9375rem;
`;

const BackImg = styled.img`
  cursor: pointer;
`;

const PageIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
const PageName = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04rem;
  margin-left: -0.4373rem;
`;
