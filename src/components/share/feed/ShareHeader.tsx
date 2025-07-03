import * as S from "./share.styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import writeButton from "@assets/image/writeButton.png";
import rightButton from "@assets/image/rightButton.svg";
import checkButton from "@assets/image/checkButton.svg";
import downButton from "@assets/image/downButton.svg";
import upButton from "@assets/image/upButton.svg";
import missionCompltedIcon from "@assets/icons/missionComplted.svg";
import { ApiwithToken } from "@api/ApiWithToken";

const ShareHeader = ({ setOrder }: { setOrder: (order: string) => void }) => {
  const sortOptions = ["최신순", "인기순", "이번달"];

  const [selected, setSelected] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);
  const [mission, setMission] = useState<any>("");
  const [missionCompleted, setMissionCompleted] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleselect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    setOrder(translateOrderToEnglish(option));
  };
  const translateOrderToEnglish = (order: string) => {
    const orderMap: { [key: string]: string } = {
      최신순: "recent",
      인기순: "likes",
      이번달: "this_month",
    };
    return orderMap[order] || order;
  };
  const translateKeyword = (englishKeyword: string) => {
    const keywordMap: { [key: string]: string } = {
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
    return keywordMap[englishKeyword] || englishKeyword;
  };

  const fetch = async () => {
    const response = await ApiwithToken.get("/share/mission/");
    setMission(response.data);
    setMissionCompleted(response.data.is_completed);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <HeadWrapper>
        <Link to="/myFeed">
          <S.FeedContainer>
            내 피드
            <img src={rightButton} alt="피드로 이동" />
          </S.FeedContainer>
        </Link>
        <Link to="/feed/choose">
          <img src={writeButton} alt="글작성 버튼" />
        </Link>
      </HeadWrapper>
      <S.PointSection>
        <S.PointWrapper>
          <span>미션</span> <span>|</span> <span>100P</span>
        </S.PointWrapper>
        {missionCompleted ? (
          <img src={missionCompltedIcon} alt="확인" />
        ) : (
          <img src={checkButton} alt="확인" />
        )}
      </S.PointSection>
      <S.DescriptContainer>
        <S.KeywordContainer>
          {translateKeyword(mission.keyword)}
        </S.KeywordContainer>
        <span>키워드로 실천카드 만들어</span>
        <span>&nbsp;피드 올리기!</span>
      </S.DescriptContainer>
      <S.SortButton onClick={toggleDropdown}>
        {selected}
        <img
          src={isOpen ? upButton : downButton}
          alt={isOpen ? "토글 접기" : "토글 펼치기"}
        />
        {isOpen && (
          <S.UnSelectOptionList>
            {sortOptions
              .filter((opt) => opt !== selected)
              .map((opt) => (
                <S.UnSelectedOptionItem
                  key={opt}
                  onClick={() => handleselect(opt)}
                >
                  {opt}
                </S.UnSelectedOptionItem>
              ))}
          </S.UnSelectOptionList>
        )}
      </S.SortButton>
    </>
  );
};

export const HeadWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 1rem;
  width: 100%;

  img {
    width: calc(37px - 0.25em);
  }
`;

export default ShareHeader;
