import * as S from "./Login.styled";
import { CommonButton } from "../common/common.style";
import axios from "axios";
import { useRef, FormEvent, useState } from "react";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});
export const InputSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const userid = formData.get("useid") as string;
    const password = formData.get("password") as string;

    try {
      const response = await api.post("/users/login/", {
        userid,
        password,
      });
      if (response.status === 200) {
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
        <S.InputWrapper>
          <S.Input name="userid" placeholder="아이디를 입력해주세요."></S.Input>
          <S.Input
            name="password"
            placeholder="비밀번호를 입력해주세요."
          ></S.Input>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <CommonButton color="white" bgcolor="primaryColor" type="submit">
            <span>로그인</span>
          </CommonButton>
          <CommonButton bgcolor="gray2" border="gray1">
            <span>회원가입</span>
          </CommonButton>
        </S.ButtonWrapper>
      </form>
    </>
  );
};
