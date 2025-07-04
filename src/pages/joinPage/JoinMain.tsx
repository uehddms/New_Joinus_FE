import * as S from "./JoinMain.styled";
import ImgBox from "../../assets/icons/ImgBox.svg";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { ApiwithToken } from "@api/ApiWithToken";
import imageFrame from "../../assets/icons/imageFrame.svg";

export const JoinMain = () => {
  const navigate = useNavigate();
  const [complete, setComplete] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<"example" | number>(
    "example"
  );
  const [latestImgUrl, setLatestImgUrl] = useState<string | null>(null);
  const [availableMonths, setAvailableMonths] = useState<number[]>([]);

  useEffect(() => {
    const fetchTutorialAndMonths = async () => {
      const response = await ApiwithToken.get(`join/tutorial/`);
      setComplete(response.data.tutorial_completed);
      if (response.data.tutorial_completed) {
        const monthsWithCards: number[] = [];
        for (let month = 1; month <= 12; month++) {
          try {
            const res = await ApiwithToken.get("join/cards/", {
              params: {
                month,
                only_not_shared: false,
                ordered_by_is_shared: false,
              },
            });
            if (res.data.cardposts && res.data.cardposts.length > 0) {
              monthsWithCards.push(month);
            }
          } catch {
            // 에러 무시 (해당 월에 카드가 없거나 기타 오류)
          }
        }
        setAvailableMonths(monthsWithCards);
        const thisMonth = new Date().getMonth() + 1;
        if (monthsWithCards.includes(thisMonth)) {
          setSelectedMonth(thisMonth);
          handleMonthClick(thisMonth);
        } else if (monthsWithCards.length > 0) {
          setSelectedMonth(monthsWithCards[0]);
          handleMonthClick(monthsWithCards[0]);
        }
      }
    };
    fetchTutorialAndMonths();
  }, []);

  // 월 버튼 클릭 시 해당 월의 최신 실천카드 이미지 가져오기
  const handleMonthClick = async (month: number) => {
    setSelectedMonth(month);
    try {
      const response = await ApiwithToken.get("join/cards/", {
        params: {
          month,
          only_not_shared: false,
          ordered_by_is_shared: false,
        },
      });
      const posts = response.data.cardposts;
      if (posts && posts.length > 0) {
        // 최신순 정렬(내림차순)
        const sorted = posts.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setLatestImgUrl(sorted[0].small_image_url);
      } else {
        setLatestImgUrl(null);
      }
    } catch (e) {
      setLatestImgUrl(null);
    }
  };

  // 예시 클릭 시 초기화
  const handleExampleClick = () => {
    setSelectedMonth("example");
    setLatestImgUrl(null);
  };

  const goTutorial = () => {
    if (complete === false) {
      navigate("/ex");
    } else {
      navigate("/upload");
    }
  };

  // 이미지 클릭 시 해당 월의 post로 이동
  const handleImgClick = () => {
    if (typeof selectedMonth === "number") {
      navigate(`/post/${selectedMonth}`);
    }
  };

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.ImgBox src={ImgBox} />
        {(selectedMonth === "example" || !latestImgUrl) && (
          <img
            src={imageFrame}
            alt="frame"
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "80%",
              objectFit: "cover",
              borderRadius: 24,
              zIndex: 2,
            }}
          />
        )}
        {selectedMonth !== "example" && latestImgUrl && (
          <img
            src={latestImgUrl}
            alt="latest"
            style={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "80%",
              height: "80%",
              objectFit: "cover",
              borderRadius: 24,
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={handleImgClick}
          />
        )}
      </S.ImgWrapper>
      <S.Text>
        카드를&nbsp;<span>클릭해</span>&nbsp;이번달 실천카드를 확인해보세요!
      </S.Text>
      <S.MonthContainer>
        <S.Month
          selected={selectedMonth === "example"}
          onClick={handleExampleClick}
        >
          <span>예시</span>
        </S.Month>
        {complete &&
          availableMonths.map((month) => (
            <S.Month
              key={month}
              selected={selectedMonth === month}
              onClick={() => handleMonthClick(month)}
            >
              <span>{month}월</span>
            </S.Month>
          ))}
      </S.MonthContainer>
      <S.MakeBtn onClick={goTutorial}>
        <span>실천카드 만들러 가기</span>
      </S.MakeBtn>
    </S.Wrapper>
  );
};
