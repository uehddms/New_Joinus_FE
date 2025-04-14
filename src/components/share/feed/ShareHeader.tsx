import * as S from "./share.styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import writeButton from "@assets/image/writeButton.png";
import rightButton from "@assets/image/rightButton.svg";
import checkButton from "@assets/image/checkButton.svg";
import downButton from "@assets/image/downButton.svg";
import upButton from "@assets/image/upButton.svg";

const ShareHeader = () => {
  const sortOptions = ["최신순", "인기순", "이번달", "랜덤"];

  const [selected, setSelected] = useState("최신순");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleselect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <>
      <HeadWrapper>
        <Link to="/feed/detail/1">
          <S.FeedContainer>
            내 피드
            <img src={rightButton} alt="피드로 이동" />
          </S.FeedContainer>
        </Link>
        <img src={writeButton} alt="글작성 버튼" />
      </HeadWrapper>
      <S.PointSection>
        <S.PointWrapper>
          <span>미션</span> <span>|</span> <span>100P</span>
        </S.PointWrapper>
        <img src={checkButton} alt="확인" />
      </S.PointSection>
      <S.DescriptContainer>
        <S.KeywordContainer>대기 전력</S.KeywordContainer>
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
