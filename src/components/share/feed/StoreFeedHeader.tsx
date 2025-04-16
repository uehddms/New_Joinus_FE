import styled from "styled-components";
import * as S from "./share.styled";
import backButton from "@assets/icons/BackBtn.svg";
import { Link } from "react-router-dom";

const StoreFeedHeader = () => {
  return (
    <Wrapper>
      <S.BackContainer>
        <Link to="/myFeed">
          <img src={backButton} alt="뒤로가기 버튼" />
        </Link>
        <p>보관</p>
      </S.BackContainer>
    </Wrapper>
  );
};

export default StoreFeedHeader;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  padding: 0 1rem;
`;
