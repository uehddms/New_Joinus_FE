import { useState, useEffect } from "react";
import { CommonButton } from "../../common/common.style.tsx";
import * as S from "./styled.ts";
import { InfoEditApi } from "@api/my/InfoEditApi.tsx";
import Cookies from "js-cookie";

const MyInfoEdit = () => {
  const [currentUsername, setCurrentUsername] = useState<string>(); // 현재 닉네임
  const [newUsername, setNewUsername] = useState<string>(""); // 변경할 닉네임
  const [isDuplication, setIsDuplication] = useState<boolean>(false); // 중복 확인
  const [isAvailable, setIsAvailable] = useState<boolean>(false); // 사용 가능 여부
  const [message, setMessage] = useState<string>("");

  // 현재 닉네임 get
  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      alert("로그인이 되어 있지 않습니다.");
      return; // 토큰 없으면 아무 작업도 하지 않음
    }

    const fetchCurrentUsername = async () => {
      try {
        const data = await InfoEditApi.getCurrentUsername();

        if (data) {
          setCurrentUsername(data.current_username);
        }
      } catch (error) {
        alert("알 수 없는 오류가 발생했습니다.");
        console.error(error);
      }
    };

    fetchCurrentUsername();
  }, []);

  // 닉네임 변경 시 유효성 검사
  useEffect(() => {
    const normalizedUsername = newUsername.trim().normalize("NFC");

    if (!normalizedUsername) {
      setMessage("");
      setIsDuplication(false);
      setIsAvailable(false);
      return;
    }

    if (normalizedUsername === currentUsername) {
      setMessage("현재 닉네임과 같습니다.");
      setIsDuplication(true);
      setIsAvailable(false);
      return;
    }

    const nicknameRegex = /^[가-힣a-zA-Z0-9\s]+$/;
    if (!nicknameRegex.test(normalizedUsername)) {
      setMessage("닉네임은 한글, 영어, 숫자만 사용할 수 있습니다.");
      setIsDuplication(true);
      setIsAvailable(false);
      return;
    }

    if (normalizedUsername.length > 8) {
      setMessage("닉네임은 8자를 초과할 수 없습니다.");
      setIsDuplication(true);
      setIsAvailable(false);
      return;
    }

    // 유효성 검사를 통과한 경우
    setMessage("사용 가능한 닉네임입니다.");
    setIsDuplication(false);
    setIsAvailable(true);
  }, [newUsername, currentUsername]);

  // 변경 닉네임 put
  const putUpdateUsername = async () => {
    const data = await InfoEditApi.putUserName({ username: newUsername });

    if (data?.message) {
      alert(data.message); // 성공 메시지
    } else if (data?.username) {
      alert(data.username); // 오류 메시지
    }

    if (data?.username && Array.isArray(data.username)) {
      setMessage(data.username[0]); // 오류 메시지 처리 (배열)
    }
  };

  const handleSave = () => {
    if (isAvailable) {
      putUpdateUsername();

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
