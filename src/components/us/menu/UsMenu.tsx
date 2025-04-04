import { forwardRef } from "react";
import * as S from "./UsMenu.styled";
import back from "../../../assets/icons/back.svg";
import UsMenuBlocks from "./UsMenuBlocks";

interface UsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const UsMenu = forwardRef<HTMLDivElement, UsMenuProps>(
  ({ isOpen, onClose }, ref) => {
    return (
      <S.MenuContainer $isOpen={isOpen} ref={ref}>
        <S.Back src={back} onClick={onClose} />
        <UsMenuBlocks />
      </S.MenuContainer>
    );
  }
);

export default UsMenu;
