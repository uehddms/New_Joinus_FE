import * as S from "./JoinComplete.styled";
import imageFrame from "@assets/icons/imageFrame.svg";
import { CommonButton } from "@components/common/common.style";
import Down from "@assets/icons/Down.svg";
import DownLeft from "@assets/icons/DownLeft.svg";
import { ApiwithToken } from "@api/ApiWithToken";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import Frame1 from "@assets/image/Frame1.svg";
import Frame2 from "@assets/image/Frame2.svg";
import Frame3 from "@assets/image/Frame3.svg";
import { useEffect, useState } from "react";

export const JoinComplete = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cardId = location.state?.cardId;

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    const imageData = sessionStorage.getItem("imageFile");
    const selectedFrameIndex = sessionStorage.getItem("selectedFrameIndex");
    const frames = [Frame1, Frame2, Frame3];

    if (!imageData || selectedFrameIndex === null) return;

    if (Number(selectedFrameIndex) === -1) {
      setPreviewUrl(imageData);
      return;
    }

    const frameUrl = frames[Number(selectedFrameIndex)];
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const photo = new window.Image();
    const frame = new window.Image();

    photo.crossOrigin = "anonymous";
    frame.crossOrigin = "anonymous";

    photo.onload = () => {
      const originalWidth = photo.width;
      const originalHeight = photo.height;

      canvas.width = originalWidth;
      canvas.height = originalHeight;

      frame.onload = () => {
        ctx.drawImage(photo, 0, 0, originalWidth, originalHeight);
        ctx.drawImage(frame, 0, 0, originalWidth, originalHeight);
        setPreviewUrl(canvas.toDataURL("image/png"));
      };

      frame.src = frameUrl;
    };

    photo.src = imageData;
  }, []);

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

  const handleDownload = () => {
    if (!previewUrl) return;
    const a = document.createElement("a");
    a.href = previewUrl;
    a.download = "실천카드.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <S.Wrapper>
      <S.ImageContainer>
        {previewUrl ? (
          <S.Image src={previewUrl} />
        ) : (
          <S.Image src={imageFrame} />
        )}
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
          <S.DownBtn onClick={handleDownload}>
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
