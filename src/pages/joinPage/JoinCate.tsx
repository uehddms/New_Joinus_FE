import * as S from "./JoinCate.styled";
import { JoinHeader } from "@components/join/JoinHeader";
import { CommonButton } from "@components/common/common.style";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export const JoinCate = () => {
  const cates = [
    "대기전력",
    "재활용",
    "물절약",
    "분리배출",
    "다회용기",
    "친환경",
    "텀블러",
    "캠페인",
    "기타",
  ];

  const navigate = useNavigate();
  const [selectedCate, setSelectedCate] = useState<string | null>(null);

  useEffect(() => {
    // 페이지 진입 시 값 초기화
    sessionStorage.removeItem("selectedCate");
    sessionStorage.removeItem("selectedFrameIndex");
    setSelectedCate(null);
    const saved = sessionStorage.getItem("selectedCate");
    if (saved) setSelectedCate(saved);
  }, []);

  const handleCateSelect = (cate: string) => {
    setSelectedCate(cate);
    sessionStorage.setItem("selectedCate", cate);
  };

  const goFrame = () => {
    navigate("/frame");
  };

  return (
    <S.Wrapper>
      <JoinHeader />
      <S.Container>
        <S.CateContainer>
          {cates.map((cate, index) => (
            <S.CateItem
              key={index}
              selected={selectedCate === cate}
              onClick={() => handleCateSelect(cate)}
            >
              <span>{cate}</span>
            </S.CateItem>
          ))}
        </S.CateContainer>
        <S.Content>나의 실천은 어떤 키워드에 해당하나요?</S.Content>
      </S.Container>
      <CommonButton type="button" onClick={goFrame} disabled={!selectedCate}>
        <span>다음</span>
      </CommonButton>
    </S.Wrapper>
  );
};
