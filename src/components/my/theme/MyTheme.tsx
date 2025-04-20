import { useState } from "react";
import * as S from "./styled.ts";
import { CommonButton } from "../../common/common.style.tsx";
import BasicThemeImg from "../../../assets/image/BasicThemeImg.svg";
import PinkThemeImg from "../../../assets/image/MyPinkTheme.svg";
import MyTheme1 from "../../../assets/image/MyTheme1.svg";
import MyTheme2 from "../../../assets/image/MyTheme2.svg";
import SelectImg from "../../../assets/image/MySelectImg.svg";
import NonSelectImg from "../../../assets/image/MyNonSelectImg.svg";

const MyTheme = () => {
  const [myTheme, setMyTheme] = useState("");
  const [themeList, setThemeList] = useState([BasicThemeImg, PinkThemeImg]);
  //const [isCheckLoading, setIsCheckLoading] = useState(false);
  //const [isChangeLoading, setIsChangeLoading] = useState(false);

  //   useEffect(() => {
  //     // 처음 컴포넌트가 마운트 될 때 테마 조회
  //     checkTheme();
  //   }, []);

  // 테마 선택 함수
  const handleThemeSelection = (theme: string) => {
    setMyTheme(theme);
  };

  //   // 테마 조회 함수
  //   const checkTheme = async () => {
  //     if (!token) {
  //       alert("로그인 정보가 없습니다.");
  //       return;
  //     }

  //     setIsCheckLoading(true);
  //     try {
  //       // 테마 조회 API 호출 (GET 요청)
  //       const response = await apiCall("users/my_theme/", "GET", null, token);

  //       // 응답 데이터에서 'is_selected'가 true인 테마 찾기
  //       const selectedTheme = response.data.find(
  //         (theme) => theme.is_selected === true
  //       );

  //       if (selectedTheme) {
  //         setMyTheme(selectedTheme.theme_name);
  //       }

  //       setThemeList(response.data);
  //     } catch (error) {
  //       console.error("조회 실패:", error);
  //       alert("조회에 실패했습니다. 다시 시도해주세요. ");
  //     } finally {
  //       setIsCheckLoading(false);
  //     }
  //   };

  //   // 테마 변경 함수
  //   const changeTheme = async () => {
  //     if (!token) {
  //       alert("로그인 정보가 없습니다.");
  //       return;
  //     }

  //     if (!myTheme) {
  //       alert("테마가 선택되지 않았습니다.");
  //       return;
  //     }

  //     setIsChangeLoading(true);
  //     try {
  //       // 테마 변경 API 호출 (POST 요청)
  //       const response = await apiCall(
  //         "users/my_theme/",
  //         "POST",
  //         { selected_theme: myTheme },
  //         token
  //       );

  //       // 서버에서 최신 데이터를 가져오기
  //       await checkTheme();
  //     } catch (error) {
  //       console.error("변경 실패:", error);
  //       alert("변경에 실패했습니다. 다시 시도해주세요. ");
  //     } finally {
  //       setIsChangeLoading(false);
  //     }
  //   };

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
          <CommonButton color="white" bgcolor="primaryColor">
            <span>변경하기</span>
          </CommonButton>
        </S.ButtonSection>
      </S.MyThemeContainer>
    </>
  );
};

export default MyTheme;
