import * as S from "./JoinFrame.styled";
import Frame1 from "@assets/image/Frame1.svg";
import Frame2 from "@assets/image/Frame2.svg";
import Frame3 from "@assets/image/Frame3.svg";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { JoinHeader } from "@components/join/JoinHeader";
import { CommonButton } from "@components/common/common.style";
import { ApiwithToken } from "@api/ApiWithToken";
import { useNavigate } from "react-router";

function dataURItoFile(dataURI: string, fileName: string): File {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new File([ab], fileName, { type: mimeString });
}

export const JoinFrame = () => {
  const navigate = useNavigate();
  const Frames = [Frame1, Frame2, Frame3];

  const [frameNames, setFrameNames] = useState<string[]>([]);
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchFrame = async () => {
      try {
        const response = await ApiwithToken.get("join/frames/");
        setFrameNames(response.data.frame_names);
      } catch (err) {
        console.error("프레임 가져오기 실패:", err);
      }
    };
    fetchFrame();
  }, []);

  const handleClick = (index: number) => {
    setSelectedFrameIndex(index);
    sessionStorage.setItem("selectedFrameIndex", index.toString());
  };

  const handleSubmit = async () => {
    const imageData = sessionStorage.getItem("imageFile");
    const selected = sessionStorage.getItem("selectedCate");
    if (!imageData || !selected || selectedFrameIndex === null) {
      alert("모든 항목을 선택해주세요!");
      return;
    }

    const keywordMap = {
      대기전력: "STANDBY_POWER",
      재활용: "RECYCLING",
      물절약: "SAVING",
      분리배출: "SEPARATION",
      다회용기: "REUSABLE",
      친환경: "ECO_FRIENDLY",
      텀블러: "TUMBLER",
      캠페인: "CAMPAIGN",
      기타: "OTHER",
    };

    const mappedKeyword = keywordMap[selected] || "OTHER";

    const size = 500;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const photo = new window.Image();
    photo.crossOrigin = "anonymous";
    let loaded = 0;
    const uploadAfterDraw = (blob: Blob) => {
      const formData = new FormData();
      formData.append("keyword", mappedKeyword);
      formData.append("image", blob, "card.png");
      for (const pair of formData.entries()) {
        console.log("▶ formData:", pair[0], pair[1]);
      }
      ApiwithToken.post("join/cards/", formData, {
        headers: {
          "Content-Type": undefined,
          Authorization: `Token ${Cookies.get("access_token")}`,
        },
      })
        .then((response) => {
          console.log("카드 생성 완료:", response.data);
          navigate("/complete", {
            state: { cardId: Number(response.data.id) },
          });
        })
        .catch((error) => {
          console.error("카드 생성 실패:", error);
          console.log("🔍 서버 응답:", error.response?.data);
        });
    };
    if (selectedFrameIndex === -1) {
      // 프레임 없이 사진만 업로드
      photo.onload = () => {
        ctx.drawImage(photo, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (blob) uploadAfterDraw(blob);
          else alert("이미지 변환 실패");
        }, "image/png");
      };
      photo.src = imageData;
      return;
    }
    // 프레임 합성
    const frameUrl = Frames[selectedFrameIndex];
    const frame = new window.Image();
    frame.crossOrigin = "anonymous";
    const checkAndDraw = () => {
      loaded += 1;
      if (loaded === 2) {
        ctx.drawImage(photo, 0, 0, size, size);
        ctx.drawImage(frame, 0, 0, size, size);
        canvas.toBlob((blob) => {
          if (blob) uploadAfterDraw(blob);
          else alert("이미지 합성 실패");
        }, "image/png");
      }
    };
    photo.onload = checkAndDraw;
    frame.onload = checkAndDraw;
    photo.src = imageData;
    frame.src = frameUrl;
  };

  return (
    <S.Wrapper>
      <JoinHeader />
      <S.FrameContainer>
        {Frames.map((frame, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            <S.FrameItem
              src={frame}
              alt={`Frame ${index + 1}`}
              isSelected={selectedFrameIndex === index}
            />
          </div>
        ))}
        <div onClick={() => handleClick(-1)}>
          <S.FrameEmpty isSelected={selectedFrameIndex === -1}>
            프레임<span>X</span>
          </S.FrameEmpty>
        </div>
      </S.FrameContainer>
      {frameNames.length > 0 && (
        <S.NameList>
          {frameNames.map((name, i) => (
            <S.FrameName
              key={i}
              isSelected={i === selectedFrameIndex}
              onClick={() => handleClick(i)}
            >
              {name}
            </S.FrameName>
          ))}
          <S.FrameName
            isSelected={selectedFrameIndex === -1}
            onClick={() => handleClick(-1)}
          >
            프레임X
          </S.FrameName>
        </S.NameList>
      )}
      <S.Text>원하는 프레임을 선택해주세요!</S.Text>
      <CommonButton type="button" onClick={handleSubmit}>
        <span>다음</span>
      </CommonButton>
    </S.Wrapper>
  );
};
