import { CommonButton } from "../common/common.style";
import * as S from "./Login.styled";

export const ButtonSection = () => {
  return (
    <S.ButtonWrapper>
      <CommonButton color="primaryColor">로그인</CommonButton>
      <CommonButton color="gray2" border="gray1">
        회원가입
      </CommonButton>
    </S.ButtonWrapper>
  );
};
