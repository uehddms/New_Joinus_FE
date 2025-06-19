import * as S from "./JoinFrame.styled";
import Frame1 from "@assets/image/Frame1.svg";
import Frame2 from "@assets/image/Frame2.svg";
import Frame3 from "@assets/image/Frame3.svg";
import { useEffect, useState } from "react";
import { JoinHeader } from "@components/join/JoinHeader";
import { CommonButton } from "@components/common/common.style";
import { ApiwithToken } from "@api/ApiWithToken";

export const JoinFrame = () => {
  const Frames = [Frame1, Frame2, Frame3];

  const [frameNames, setFrameNames] = useState<string[]>([]);
  const [selectedFrameIndex, setSelectedFrameIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchFrame = async () => {
      try {
        const response = await ApiwithToken.get("join/frames/");
        console.log("프레임 목록:", response.data);
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

      <CommonButton>
        <span>다음</span>
      </CommonButton>
    </S.Wrapper>
  );
};
