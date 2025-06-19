import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import YesNoModal from "../../modal/YesNoModal";
import { logoutApi } from "@api/my/LogoutApi";
import Cookies from "js-cookie";

const MyLogout = () => {
  const navigate = useNavigate();

  const postLogout = async () => {
    const token = Cookies.get("access_token");
    if (!token) {
      alert("로그인이 되어 있지 않습니다.");
      return; // 토큰 없으면 아무 작업도 하지 않음
    }

    try {
      const data = await logoutApi.postLogout();

      if (data?.message) {
        alert(data.message);
        Cookies.remove("access_token"); // 쿠키 삭제
        navigate("/");
      } else if (data?.detail) {
        alert(data.detail); // 백엔드에서 detail 응답 시
      } else {
        alert("로그아웃에 실패했습니다."); // 응답이 비정상적일 때
      }
    } catch (error) {
      alert("알 수 없는 오류가 발생했습니다.");
      console.error(error);
    }
  };

  const handleYes = () => {
    postLogout();
  };

  const handleNo = () => {
    navigate("/us");
  };

  return (
    <S.MyLogoutContainer>
      <YesNoModal
        handleYes={handleYes}
        handleNo={handleNo}
        $noColor="primaryColor"
      >
        로그아웃 하시겠습니까?
      </YesNoModal>
    </S.MyLogoutContainer>
  );
};

export default MyLogout;
