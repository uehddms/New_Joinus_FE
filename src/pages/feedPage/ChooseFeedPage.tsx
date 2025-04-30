import MonthButton from "@components/share/feed/MonthButton";
import { useState, useRef, useEffect } from "react";
import * as S from "./feedPage.styled";
import ArrowDown from "@assets/icons/chevron-down.svg";
import Card from "@components/share/feed/Card";
import KeywordModal from "@components/modal/KeywordModal";
const ChooseFeedPage = () => {
  const [isKeywordModalOpen, setIsKeywordModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <S.TextContainer>
        피드에 <span>업로드 할 실천카드</span>를 선택해주세요.
      </S.TextContainer>
      <S.ButtonContainer ref={containerRef}>
        <MonthButton>1월</MonthButton>
        <MonthButton>2월</MonthButton>
        <MonthButton>3월</MonthButton>
        <MonthButton>3월</MonthButton>
        <MonthButton>3월</MonthButton>
        <MonthButton>3월</MonthButton>
      </S.ButtonContainer>
      <S.Hr />
      <S.KeyContainer>
        <S.ChooseMonthContainer>3월</S.ChooseMonthContainer>
        <S.KeyWordContainer onClick={() => setIsKeywordModalOpen(true)}>
          키워드 선택
          <img src={ArrowDown} alt="키워드 선택 모달" />
        </S.KeyWordContainer>
      </S.KeyContainer>
      <S.CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.CardContainer>
      {isKeywordModalOpen && (
        <KeywordModal onClose={() => setIsKeywordModalOpen(false)} />
      )}
    </>
  );
};

export default ChooseFeedPage;
