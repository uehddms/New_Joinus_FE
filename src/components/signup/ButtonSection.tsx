import { CommonButton } from "../common/common.style";
import { ButtonWrapper } from "./signup.styled";

export const ButtonSection = () => {
  return (
    <ButtonWrapper>
      <CommonButton color="white" bgcolor="primaryColor">
        <span>회원가입</span>
      </CommonButton>
    </ButtonWrapper>
  );
};
