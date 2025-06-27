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
    const file = dataURItoFile(imageData, "upload.jpg");

    console.log("▶ 파일 정보", file);
    const formData = new FormData();
    formData.append("keyword", mappedKeyword);
    formData.append("image", file);

    for (const pair of formData.entries()) {
      console.log("▶ formData:", pair[0], pair[1]);
    }

    try {
      const response = await ApiwithToken.post("join/cards/", formData, {
        headers: {
          "Content-Type": undefined,
          Authorization: `Token ${Cookies.get("access_token")}`, // ✅ 추가 필요
        },
      });
      console.log("카드 생성 완료:", response.data);
      navigate("/complete", { state: { cardId: Number(response.data.id) } });
    } catch (error) {
      console.error("카드 생성 실패:", error);
      console.log("🔍 서버 응답:", error.response?.data);
    }
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
        <S.FrameEmpty>
          프레임<span>X</span>
        </S.FrameEmpty>
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
        </S.NameList>
      )}
      <S.Text>원하는 프레임을 선택해주세요!</S.Text>
      <CommonButton type="button" onClick={handleSubmit}>
        <span>다음</span>
      </CommonButton>
    </S.Wrapper>
  );
};
