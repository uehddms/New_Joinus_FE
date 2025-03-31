import styled from "styled-components";

export const UserContainer = styled.div`
  gap: 15px;
  width: 80%;
  height: 50px;
  padding: 12px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray1};

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RankScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  p {
    color: ${({ theme }) => theme.colors.white};
    line-height: 16px;
    font-size: 16px;
  }
`;

export const CardCountCotainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 2px;
  border-style: none;
  border-color: ${({ theme }) => theme.colors.gray2};
`;

export const GreenText = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
`;
