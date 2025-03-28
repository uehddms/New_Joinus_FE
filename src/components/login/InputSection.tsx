import * as S from "./Login.styled";

export const InputSection = () => {
  return (
    <S.InputWrapper>
      <S.Input placeholder="아이디를 입력해주세요."></S.Input>
      <S.Input placeholder="비밀번호를 입력해주세요."></S.Input>
      <S.FindPwBtnWrapper>
        <S.FindPwBtn>비밀번호 찾기</S.FindPwBtn>
      </S.FindPwBtnWrapper>
    </S.InputWrapper>
  );
};
