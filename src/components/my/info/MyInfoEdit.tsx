import { useState, useEffect } from "react";
import { CommonButton } from "../../common/common.style.tsx";
import * as S from "./styled.ts";

const MyInfoEdit = () => {
  const [currentUsername, setCurrentUsername] = useState("조인어스"); // 현재 닉네임
  const [newUsername, setNewUsername] = useState(""); // 변경할 닉네임
  const [isDuplication, setIsDuplication] = useState(false); // 중복 확인
  const [isAvailable, setIsAvailable] = useState(false); // 사용 가능 여부
  const [message, setMessage] = useState("");

  // 닉네임 변경 시 유효성 검사
  useEffect(() => {
    if (!newUsername) {
      setMessage("");
      setIsDuplication(false);
      setIsAvailable(false);
      return;
    }

    if (currentUsername === newUsername) {
      setMessage("현재 닉네임과 같습니다.");
      setIsDuplication(true);
      setIsAvailable(false);
      return;
    }

    // 여기서 실제로는 API 호출을 통해 중복 확인을 해야 합니다
    // 예시를 위해 간단한 로직으로 구현
    if (newUsername === "조인어스") {
      setMessage("중복된 닉네임입니다.");
      setIsDuplication(true);
      setIsAvailable(false);
    } else {
      setMessage("사용 가능한 닉네임입니다.");
      setIsDuplication(false);
      setIsAvailable(true);
    }
  }, [newUsername, currentUsername]);

  const handleSave = () => {
    if (isAvailable) {
      // 실제로는 API 호출을 통해 닉네임 변경 처리
      setCurrentUsername(newUsername);
      setNewUsername("");
      setMessage("");
      setIsAvailable(false);
    }
  };

  return (
    <S.MyPageContainer>
      <S.MyContainer>
        <S.EditBox>
          <S.UsernameTitle>현재 닉네임</S.UsernameTitle>
          <S.UsernameCurrentBox>{currentUsername}</S.UsernameCurrentBox>

          <S.UsernameTitle style={{ color: "#2E302D" }}>
            변경할 닉네임
          </S.UsernameTitle>

          <S.UsernameInputBox
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            placeholder="닉네임 입력"
            maxLength={10}
            style={{
              borderColor: isDuplication
                ? "#F66466"
                : isAvailable
                ? "#5F9D69"
                : "#e0e0e0",
            }}
          />

          {newUsername && (
            <S.ValidationMessage isError={isDuplication}>
              {message}
            </S.ValidationMessage>
          )}
        </S.EditBox>

        <S.ButtonSection>
          {isDuplication || !newUsername ? (
            <CommonButton disabled>
              <span>변경하기</span>
            </CommonButton>
          ) : (
            <CommonButton
              color="white"
              bgcolor="primaryColor"
              onClick={handleSave}
            >
              <span>변경하기</span>
            </CommonButton>
          )}
        </S.ButtonSection>
      </S.MyContainer>
    </S.MyPageContainer>
  );
};

export default MyInfoEdit;
