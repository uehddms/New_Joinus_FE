import { Link } from "react-router-dom";
import styled from "styled-components";
import backButton from "@assets/icons/BackBtn.svg";
import * as S from "./share.styled";
import rightButton from "@assets/image/rightButton.svg";

const MyFeedHeader = () => {
  return (
    <Wrapper>
      <S.BackContainer>
        <Link to="/share">
          <img src={backButton} alt="뒤로가기 버튼" />
        </Link>
        <p>내이름</p>
      </S.BackContainer>
      <Link to="/storeFeed">
        <S.FeedContainer>
          보관
          <img src={rightButton} alt="피드로 이동" />
        </S.FeedContainer>
      </Link>
    </Wrapper>
  );
};

export default MyFeedHeader;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  padding: 0 1rem;
`;
