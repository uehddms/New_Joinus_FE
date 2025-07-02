import { CommonButton } from "@components/common/common.style";
import { ButtonWrapper } from "./signup.styled";
import * as S from "./signup.styled";
import { useRef, FormEvent, useState } from "react";
import axios from "axios";

// axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

export const InputSection = () => {
  const [isNickNameDup, setIsNickNameDup] = useState<boolean | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const maxLength = 15; // 입력 필드 제한

  const handleDupCheck = async () => {
    if (!usernameRef.current) return;
    try {
      const response = await api.post("users/username_unique/", {
        username: usernameRef.current.value,
      });
      console.log(response);
      if (response.status === 200) {
        setIsNickNameDup(false);
      } else if (response.status === 202) {
        setIsNickNameDup(true);
      }
    } catch (e) {
      console.log(e, "error");
      setIsNickNameDup(true);
      console.log(isNickNameDup);
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const username = formData.get("username") as string;
    const userid = formData.get("userid") as string;
    const password = formData.get("password") as string;
    const password2 = formData.get("password2") as string;

    // 비밀번호 확인
    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (
      username === "" ||
      userid === "" ||
      password === "" ||
      password2 === ""
    ) {
      alert("모든 값을 입력해주세요.");
      return;
    }
    try {
      const response = await api.post("/users/register/", {
        username,
        userid,
        password,
        password2,
      });
      console.log(response);

      if (response.status === 200) {
        alert("회원가입이 완료되었습니다.");
        // 회원가입 성공 후 로그인 페이지로 이동
        window.location.href = "/";
      } else if (response.status === 202 && response.data.errors) {
        const errors = response.data.errors;
        const firstErrorKey = Object.keys(errors)[0];
        const firstErrorMsg = Array.isArray(errors[firstErrorKey])
          ? errors[firstErrorKey][0]
          : "";
        alert(firstErrorMsg);
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
      <S.InputWrapper>
        <p>회원가입</p>
        <S.CheckDupContainer isnicknamedup={isNickNameDup}>
          <S.SignUpInput
            name="username"
            placeholder="닉네임을 입력해주세요."
            isnicknamedup={isNickNameDup}
            ref={usernameRef}
            maxLength={8}
          />
          <S.CheckDuplication type="button" onClick={handleDupCheck}>
            중복확인
          </S.CheckDuplication>
          {isNickNameDup === null ? (
            <></>
          ) : isNickNameDup ? (
            <p>중복된 닉네임입니다.</p>
          ) : (
            <p>사용가능한 닉네임입니다.</p>
          )}
        </S.CheckDupContainer>
        <S.SignUpInput
          name="userid"
          placeholder="아이디를 입력해주세요."
          maxLength={maxLength}
        />
        <S.SignUpInput
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          maxLength={maxLength}
        />
        <S.SignUpInput
          name="password2"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          maxLength={maxLength}
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
