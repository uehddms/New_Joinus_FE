import { Input } from "../login/Login.styled";
import { CommonButton } from "@components/common/common.style";
import { ButtonWrapper } from "./signup.styled";
import * as S from "./signup.styled";
import { useRef, FormEvent } from "react";
import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});

export const InputSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const nickname = formData.get("nickname") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    // 비밀번호 확인
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await api.post("/signup", {
        nickname,
        username,
        password,
      });

      if (response.status === 200) {
        alert("회원가입이 완료되었습니다.");
        // 회원가입 성공 후 로그인 페이지로 이동
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
      <S.InputWrapper>
        <p>회원가입</p>
        <Input name="nickname" placeholder="닉네임을 입력해주세요." />
        <S.CheckDuplication>중복확인</S.CheckDuplication>
        <Input name="username" placeholder="아이디를 입력해주세요." />
        <Input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
        />
      </S.InputWrapper>
      <ButtonWrapper>
        <CommonButton color="white" bgcolor="primaryColor">
          <span>회원가입</span>
        </CommonButton>
      </ButtonWrapper>
    </form>
  );
};
