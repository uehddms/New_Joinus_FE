import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;

  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  letter-spacing: -0.64px;

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.64px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;

  padding: 1rem 2rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Hr = styled.div`
  width: 85%;
  height: 1px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray2};
  margin: 0 auto;

  color: ${({ theme }) => theme.colors.gray2};
`;

export const KeyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

export const ChooseMonthContainer = styled.div`
  width: 62px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;

  border-radius: 24px;
`;

export const KeyWordContainer = styled.button`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;

  cursor: pointer;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem 2rem;
`;
