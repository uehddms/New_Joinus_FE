import { Input } from "../login/Login.styled";
import * as S from "./signup.styled";

export const InputSection = () => {
  return (
    <S.InputWrapper>
      <p>회원가입</p>
      <Input placeholder="닉네임을 입력해주세요."></Input>
      <Input placeholder="아이디를 입력해주세요."></Input>
      <Input placeholder="비밀번호를 입력해주세요."></Input>
      <Input placeholder="비밀번호를 다시 입력해주세요."></Input>
    </S.InputWrapper>
  );
};
