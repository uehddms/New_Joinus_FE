import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import MyModal from "../../modal/YesNoModal";
import { CommonButton } from "../../common/common.style";

const MyQuit = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleYes = () => {
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
            <MyModal
              handleYes={handleYes}
              handleNo={handleNo}
              $noColor="negativeErrorCancel"
            >
              정말 탈퇴 하시겠습니까?
            </MyModal>
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
