import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: fixed;
  bottom: 20px;
  width: 88%;
  max-width: 440px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.gray1};
  stroke-width: 1.4px;
  stroke: ${({ theme }) => theme.colors.gray2};
  border-radius: 80px;
  justify-content: space-around;
  align-items: center;

  @media (max-height: 800px) {
    width: 75%;
  }
`;

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const UsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const RankContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 20%;

  @media (max-height: 800px) {
    width: 15%;
  }
`;

export const JoinImg = styled.img``;

export const UsImg = styled.img``;

export const ShareImg = styled.img``;

export const RankImg = styled.img``;
