import { CommonButton } from "../common/common.style";
import * as S from "./Login.styled";

export const ButtonSection = () => {
  return (
    <S.ButtonWrapper>
      <CommonButton color="white" bgcolor="primaryColor">
        <span>로그인</span>
      </CommonButton>
      <CommonButton bgcolor="gray2" border="gray1">
        <span>회원가입</span>
      </CommonButton>
    </S.ButtonWrapper>
  );
};
