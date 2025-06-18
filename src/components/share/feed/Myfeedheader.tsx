import { Link } from "react-router-dom";
import styled from "styled-components";
import backButton from "@assets/icons/BackBtn.svg";
import * as S from "./share.styled";
import rightButton from "@assets/image/rightButton.svg";
import { ApiwithToken } from "@api/ApiWithToken";
import { useEffect, useState } from "react";

const MyFeedHeader = () => {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await ApiwithToken.get("users/usernameupdate/");
      setUser(response.data);
    };
    fetch();
  }, []);
  return (
    <Wrapper>
      <S.BackContainer>
        <Link to="/share">
          <img src={backButton} alt="뒤로가기 버튼" />
        </Link>
        <p>{user?.current_username}</p>
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
