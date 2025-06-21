import MonthButton from "@components/share/feed/MonthButton";
import { useState, useRef, useEffect } from "react";
import * as S from "./feedPage.styled";
import ArrowDown from "@assets/icons/chevron-down.svg";
import Card from "@components/share/feed/Card";
import KeywordModal from "@components/modal/KeywordModal";
import { shareApi } from "@api/share/ShareApi";
const ChooseFeedPage = () => {
  const [isKeywordModalOpen, setIsKeywordModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any[]>([]);

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

  const handleMonthClick = (month: number) => {
    setSelectedMonth(month);
  };

  const handleKeywordSelect = (keyword: string) => {
    setSelectedKeywords((prev) => {
      if (prev.includes(keyword)) {
        return prev.filter((k) => k !== keyword);
      }
      if (prev.length >= 2) {
        return [prev[1], keyword];
      }
      return [...prev, keyword];
    });
  };

  const getKeywordDisplayText = () => {
    if (selectedKeywords.length === 0) {
      return "키워드 선택";
    } else if (selectedKeywords.length === 1) {
      return selectedKeywords[0];
    } else {
      return selectedKeywords.join(" | ");
    }
  };

  const handleGetShareBymonth = async () => {
    const response = await shareApi.getShareBymonth({
      keywords: selectedKeywords,
      month: selectedMonth,
      only_not_shared: false,
      ordered_by_is_shared: false,
    });
    setData(response.data.cardposts);
  };

  useEffect(() => {
    handleGetShareBymonth();
    console.log(data);
  }, [selectedMonth, selectedKeywords]);

  return (
    <>
      <S.TextContainer>
        피드에 <span>업로드 할 실천카드</span>를 선택해주세요.
      </S.TextContainer>
      <S.ButtonContainer ref={containerRef}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
          <MonthButton
            key={month}
            onClick={() => handleMonthClick(month)}
            isSelected={selectedMonth === month}
          >
            {month}월
          </MonthButton>
        ))}
      </S.ButtonContainer>
      <S.Hr />
      <S.KeyContainer>
        <S.ChooseMonthContainer>{selectedMonth}월</S.ChooseMonthContainer>
        <S.KeyWordContainer onClick={() => setIsKeywordModalOpen(true)}>
          {getKeywordDisplayText()}
          <img src={ArrowDown} alt="키워드 선택 모달" />
        </S.KeyWordContainer>
      </S.KeyContainer>
      <S.CardContainer>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </S.CardContainer>
      {isKeywordModalOpen && (
        <KeywordModal
          onClose={() => setIsKeywordModalOpen(false)}
          selectedKeywords={selectedKeywords}
          onKeywordSelect={handleKeywordSelect}
        />
      )}
    </>
  );
};

export default ChooseFeedPage;
