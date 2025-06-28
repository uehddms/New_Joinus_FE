import styled from "styled-components";

export const UserContainer = styled.div`
  gap: 15px;
  width: 80%;
  height: 50px;
  padding: 12px;
  margin: 6px 0;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.gray1};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const RankScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 0.1rem 0.25rem;
`;

export const GreenText = styled.p`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;
  flex: 1;
  min-width: 0;
  text-align: left;
  font-weight: 700;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
