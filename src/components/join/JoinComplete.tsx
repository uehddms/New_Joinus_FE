import * as S from "./JoinComplete.styled";
import imageFrame from "@assets/icons/imageFrame.svg";
import { CommonButton } from "@components/common/common.style";
import Down from "@assets/icons/Down.svg";
import DownLeft from "@assets/icons/DownLeft.svg";
import { ApiwithToken } from "@api/ApiWithToken";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export const JoinComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardId = location.state?.cardId;

  const shareClick = async () => {
    if (!cardId) {
      alert("카드 ID가 없습니다.");
      return;
    }

    try {
      const response = await ApiwithToken.put(`join/cards/${cardId}/notify/`);
      console.log(response.data);
      alert(response.data.detail);
    } catch (error) {
      console.error("공유 실패:", error);
      alert("공유에 실패했습니다.");
    }
  };

  const goJoin = () => {
    navigate("/join");
  };

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.Image src={imageFrame} />
        <S.Text>실천카드가 완성되었어요!</S.Text>
      </S.ImageContainer>
      <S.BtnContainer>
        <S.CommonContainer>
          <CommonButton
            onClick={shareClick}
            style={{ width: "100%", backgroundColor: "#4F8D64" }}
          >
            <span>공유에 업로드 하기</span>
          </CommonButton>
          <S.Point>
            <span>50P</span>
          </S.Point>
        </S.CommonContainer>
        <S.DownBtnContainer>
          <S.DownBtn>
            <img src={Down} />
          </S.DownBtn>
          <S.Point>
            <span>20P</span>
          </S.Point>
        </S.DownBtnContainer>
      </S.BtnContainer>
      <S.BackContainer>
        <S.JoinBack>
          <S.Back src={DownLeft} />
          <S.Comment onClick={goJoin}>조인으로 돌아가기</S.Comment>
        </S.JoinBack>
      </S.BackContainer>
    </S.Wrapper>
  );
};
