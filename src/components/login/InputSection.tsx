import * as S from "./Login.styled";
import { CommonButton } from "../common/common.style";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import pwvisible from "@assets/icons/pwVisible.svg";
import pwNonvisible from "@assets/icons/pw-nonVisible.svg";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
});
export const InputSection = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const maxLength = 15; // 입력 필드 제한
  const navigate = useNavigate();
  const handlePW = (): void => {
    setVisible(!visible);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async () => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const userid = formData.get("userid") as string;
    const password = formData.get("password") as string;
    try {
      const response = await api.post("/users/login/", {
        userid,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        const token = response.data.token;
        Cookies.set("access_token", token, {
          path: "/",
          secure: true,
          samSite: "None",
        });
        navigate("/us");
      } else {
        setIsLogin(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form ref={formRef} style={{ width: "100%" }}>
        <S.InputWrapper>
          <S.LoginInput
            name="userid"
            placeholder="아이디를 입력해주세요."
            $islogin={isLogin}
            maxLength={maxLength}
          />
          <S.PdCheckContainer>
            <S.LoginInput
              name="password"
              placeholder="비밀번호를 입력해주세요."
              type={visible ? "text" : "password"}
              $islogin={isLogin}
              maxLength={maxLength}
            />
            <S.pdCheckButton onClick={handlePW} type="button">
              <img src={visible ? pwvisible : pwNonvisible} />
            </S.pdCheckButton>
            {isLogin || <p>잘못된 아이디 / 비밀번호 입니다.</p>}
          </S.PdCheckContainer>
        </S.InputWrapper>
        <S.ButtonWrapper>
          <CommonButton
            color="white"
            bgcolor="primaryColor"
            type="button"
            onClick={handleSubmit}
          >
            <span>로그인</span>
          </CommonButton>
          <CommonButton
            bgcolor="gray2"
            border="gray1"
            type="button"
            onClick={() => navigate("/signup")}
          >
            <span>회원가입</span>
          </CommonButton>
        </S.ButtonWrapper>
      </form>
    </>
  );
};
