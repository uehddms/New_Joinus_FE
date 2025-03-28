import { forwardRef } from "react";
import * as S from "./styled";
import back from "../../../assets/img/us/menu/back.svg";
import edit from "../../../assets/img/us/menu/edit.svg";
import theme from "../../../assets/img/us/menu/theme.svg";
import shopping from "../../../assets/img/us/menu/shopping.svg";
import send from "../../../assets/img/us/menu/send.svg";
import logout from "../../../assets/img/us/menu/logout.svg";
import quit from "../../../assets/img/us/menu/quit.svg";

interface UsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const UsMenu = forwardRef<HTMLDivElement, UsMenuProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <S.MenuContainer $isOpen={isOpen} ref={ref}>
        <S.Back src={back} onClick={onClose} />
        <S.MenuSectionBox>
          <S.MenuSection>
            <S.Img src={edit} />
            <S.Text>회원정보 수정</S.Text>
          </S.MenuSection>
          <S.Line />
          <S.MenuSection>
            <S.Img src={theme} />
            <S.Text>어스 테마 바꾸기</S.Text>
          </S.MenuSection>
          <S.Line />
          <S.MenuSection>
            <S.Img src={shopping} />
            <S.Text>구매목록</S.Text>
          </S.MenuSection>
          <S.Line />
          <S.MenuSection>
            <S.Img src={send} />
            <S.Text>문의하기</S.Text>
          </S.MenuSection>
          <S.Line />
          <S.MenuSection>
            <S.Img src={logout} />
            <S.Text>로그아웃</S.Text>
          </S.MenuSection>
          <S.Line />
          <S.MenuSection>
            <S.Img src={quit} />
            <S.Text>탈퇴</S.Text>
          </S.MenuSection>
        </S.MenuSectionBox>
      </S.MenuContainer>
    );
  }
);

export default UsMenu;
