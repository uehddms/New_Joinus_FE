import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import YesNoModal from "../../modal/YesNoModal";
import { CommonButton } from "../../common/common.style";
import { QuitApi } from "@api/my/QuitApi";
import Cookies from "js-cookie";

const MyQuit = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuit = async () => {
    const token = Cookies.get("access_token");
    if (!token) {
      alert("로그인이 되어 있지 않습니다.");
      return; // 토큰 없으면 아무 작업도 하지 않음
    }

    try {
      const data = await QuitApi.deleteQuit();

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

    navigate("/");
    // 탈퇴 로직
  };

  const handleNo = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.MyQuitContainer>
        {isModalOpen && (
          <S.ModalContainer>
            <YesNoModal
              handleYes={handleQuit}
              handleNo={handleNo}
              $noColor="negativeErrorCancel"
            >
              정말 탈퇴 하시겠습니까?
            </YesNoModal>
          </S.ModalContainer>
        )}
        <S.QuitNotice>
          정말 탈퇴하시겠습니까? <br />
          <br />
          <br />
          탈퇴 시 <span>복구가 불가능</span>하며,
          <br />
          <span>모든 기록이 삭제</span>됩니다.
        </S.QuitNotice>
        <S.QuitBtnContainer>
          <CommonButton
            color="white"
            bgcolor="negativeErrorCancel"
            onClick={() => setIsModalOpen(true)}
          >
            <span>탈퇴하기</span>
          </CommonButton>
        </S.QuitBtnContainer>
      </S.MyQuitContainer>
    </>
  );
};

export default MyQuit;
