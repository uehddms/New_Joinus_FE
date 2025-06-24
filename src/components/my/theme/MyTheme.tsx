import { useState, useEffect } from "react";
import * as S from "./styled.ts";
import { CommonButton } from "../../common/common.style.tsx";
import BasicThemeImg from "../../../assets/image/BasicThemeImg.svg";
import PinkThemeImg from "../../../assets/image/MyPinkTheme.svg";
import MyTheme1 from "../../../assets/image/MyTheme1.svg";
import MyTheme2 from "../../../assets/image/MyTheme2.svg";
import SelectImg from "../../../assets/image/MySelectImg.svg";
import NonSelectImg from "../../../assets/image/MyNonSelectImg.svg";
import { ThemeApi } from "@api/my/ThemeApi.tsx";
import Cookies from "js-cookie";

const MyTheme = () => {
  const [myTheme, setMyTheme] = useState("");
  const [themeList, setThemeList] = useState([BasicThemeImg, PinkThemeImg]);
  // const [isCheckLoading, setIsCheckLoading] = useState(false);
  // const [isChangeLoading, setIsChangeLoading] = useState(false);

  useEffect(() => {
    // 처음 컴포넌트가 마운트 될 때 테마 조회
    const token = Cookies.get("access_token");
    if (!token) {
      alert("로그인이 되어 있지 않습니다.");
      return; // 토큰 없으면 아무 작업도 하지 않음
    }

    checkTheme();
  }, []);

  // 테마 선택 함수
  const handleThemeSelection = (theme: string) => {
    setMyTheme(theme);
  };

  // 테마 조회 함수
  const checkTheme = async () => {
    // setIsCheckLoading(true);
    try {
      // 테마 조회 API 호출 (GET 요청)
      const data = await ThemeApi.getCurrentTheme();

      if (data.current_theme) {
        setMyTheme(data.current_theme);
      }

      setThemeList(data);
    } catch (error) {
      alert("알 수 없는 오류가 발생했습니다.");
      console.error(error);
    } finally {
      // setIsCheckLoading(false);
    }
  };

  // 테마 변경 함수
  const changeTheme = async () => {
    if (!myTheme) {
      alert("테마가 선택되지 않았습니다.");
      return;
    }

    // setIsChangeLoading(true);
    try {
      // 테마 변경 API 호출 (PUT 요청)
      const data = await ThemeApi.putTheme({ change_theme: myTheme });
      alert(`${data.current_theme}로 ${data.message}`);
      // 서버에서 최신 데이터를 가져오기
      await checkTheme();
    } catch (error) {
      alert("알 수 없는 오류가 발생했습니다.");
      console.error(error);
    } finally {
      // setIsChangeLoading(false);
    }
  };

  return (
    <>
      <S.MyThemeContainer>
        <S.MyThemeMain>
          <S.ThemeBox>
            <S.ThemeImg src={BasicThemeImg} />
            <S.ThemeTextBox>
              <S.ThemeText>
                <S.ThemeText_img src={MyTheme1} /> 기본 테마
              </S.ThemeText>
              <S.ThemeSelectBtn_img
                src={myTheme === "기본 테마" ? SelectImg : NonSelectImg}
                onClick={() => handleThemeSelection("기본 테마")}
              />
            </S.ThemeTextBox>
          </S.ThemeBox>

          {/* 테마 목록이 2개 이상 있을 때만 벚꽃 테마 박스 렌더링 */}
          {themeList.length > 1 && (
            <>
              <S.Line />
              <S.ThemeBox>
                <S.ThemeImg src={PinkThemeImg} />
                <S.ThemeTextBox>
                  <S.ThemeText>
                    <S.ThemeText_img src={MyTheme2} /> 라라 테마
                  </S.ThemeText>
                  <S.ThemeSelectBtn_img
                    src={
                      myTheme === "조인어스 라라테마" ? SelectImg : NonSelectImg
                    }
                    onClick={() => handleThemeSelection("조인어스 라라테마")}
                  />
                </S.ThemeTextBox>
              </S.ThemeBox>
            </>
          )}
        </S.MyThemeMain>

        <S.ButtonSection>
          <CommonButton
            color="white"
            bgcolor="primaryColor"
            onClick={changeTheme}
          >
            <span>변경하기</span>
          </CommonButton>
        </S.ButtonSection>
      </S.MyThemeContainer>
    </>
  );
};

export default MyTheme;
