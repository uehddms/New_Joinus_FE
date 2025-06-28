import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: fixed;
  bottom: 20px;
  width: 88%;
  max-width: 380px;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.gray1};
  stroke-width: 1.4px;
  stroke: ${({ theme }) => theme.colors.gray2};
  border-radius: 80px;
  justify-content: space-around;
  align-items: center;

  z-index: 100;

  @media (max-height: 800px) {
    width: 75%;
  }
`;

interface ActiveProps {
  isActive: boolean;
}

export const JoinContainer = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 23%;
  padding: 12px 0;
  background-color: ${({ isActive }) => (isActive ? "#4F8D64" : "transparent")};

  span {
    color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
    font-size: 14px;
    margin-top: 4px;
  }

  @media (max-height: 800px) {
    width: 20%;
  }
`;

export const UsContainer = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 23%;
  padding: 12px 0;
  background-color: ${({ isActive }) => (isActive ? "#4F8D64" : "transparent")};

  span {
    color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
    font-size: 14px;
    margin-top: 4px;
  }

  @media (max-height: 800px) {
    width: 20%;
  }
`;

export const ShareContainer = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 23%;
  padding: 12px 0;
  background-color: ${({ isActive }) => (isActive ? "#4F8D64" : "transparent")};

  span {
    color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
    font-size: 14px;
    margin-top: 4px;
  }

  @media (max-height: 800px) {
    width: 20%;
  }
`;

export const RankContainer = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 80px;
  width: 23%;
  padding: 12px 0;
  background-color: ${({ isActive }) => (isActive ? "#4F8D64" : "transparent")};

  span {
    color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
    font-size: 14px;
    margin-top: 4px;
  }

  @media (max-height: 800px) {
    width: 20%;
  }
`;

export const JoinImg = styled.img``;

export const UsImg = styled.img``;

export const ShareImg = styled.img``;

export const RankImg = styled.img``;

export const FooterWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
