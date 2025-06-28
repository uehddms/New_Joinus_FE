import MonthButton from "@components/share/feed/MonthButton";
import { useState, useRef, useEffect } from "react";
import * as S from "./feedPage.styled";
import ArrowDown from "@assets/icons/chevron-down.svg";
import Card from "@components/share/feed/Card";
import KeywordModal from "@components/modal/KeywordModal";
import back from "@assets/icons/back.svg";
import { Link } from "react-router";
import { ApiwithToken } from "@api/ApiWithToken";

// 한글 → 영어 변환 함수
const keywordToEnglish = (kor: string) => {
  const map: { [key: string]: string } = {
    전체: "ALL",
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
  return map[kor] || kor;
};

// 영어 → 한글 변환 함수
const keywordToKorean = (eng: string) => {
  const map: { [key: string]: string } = {
    ALL: "전체",
    STANDBY_POWER: "대기전력",
    RECYCLING: "재활용",
    SAVING: "물절약",
    SEPARATION: "분리배출",
    REUSABLE: "다회용기",
    ECO_FRIENDLY: "친환경",
    TUMBLER: "텀블러",
    CAMPAIGN: "캠페인",
    OTHER: "기타",
  };
  return map[eng] || eng;
};

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

  // 한글 키워드가 들어오면 영어로 변환해서 저장
  const handleKeywordSelect = (korKeyword: string) => {
    const engKeyword = keywordToEnglish(korKeyword);
    setSelectedKeywords((prev) => {
      if (prev.includes(engKeyword)) {
        return prev.filter((k) => k !== engKeyword);
      }
      if (prev.length >= 2) {
        return [prev[1], engKeyword];
      }
      return [...prev, engKeyword];
    });
  };

  const getKeywordDisplayText = () => {
    if (selectedKeywords.length === 0) {
      return "키워드 선택";
    } else if (selectedKeywords.length === 1) {
      return keywordToKorean(selectedKeywords[0]);
    } else {
      return selectedKeywords.map(keywordToKorean).join(" | ");
    }
  };

  const handleGetShareBymonth = async () => {
    // 쿼리스트링 직접 생성
    const keywordQuery = selectedKeywords
      .map((k) => `keywords=${encodeURIComponent(k)}`)
      .join("&");
    const url = `/join/cards/?${keywordQuery}&month=${selectedMonth}&only_not_shared=false&ordered_by_is_shared=false`;

    const response = await ApiwithToken.get(url);
    setData(response.data.cardposts);
  };

  useEffect(() => {
    handleGetShareBymonth();
    console.log(data);
  }, [selectedMonth, selectedKeywords]);

  return (
    <>
      <S.TextContainer>
        <Link to="/share">
          <img
            src={back}
            alt="뒤로가기"
            style={{ width: "20px", height: "20px" }}
          />
        </Link>
        <p>
          피드에 <span>업로드 할 실천카드</span>를 선택해주세요.
        </p>
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
          selectedKeywords={selectedKeywords.map(keywordToKorean)}
          onKeywordSelect={handleKeywordSelect}
        />
      )}
    </>
  );
};

export default ChooseFeedPage;
