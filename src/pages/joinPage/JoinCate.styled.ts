import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - 92px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45vh;
  gap: 165px;
  margin-top: 130px;

  @media (max-height: 800px) {
    height: 40vh;
    gap: 70px;
    margin-top: 75px;
  }
`;

export const CateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  width: fit-content;
  height: fit-content;
  gap: 16px;
  justify-content: center;
`;

export const CateItem = styled.div<{ selected: boolean }>`
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.primaryColor : theme.colors.gray2};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primaryColor : theme.colors.gray1};

  span {
    color: ${({ theme, selected }) =>
      selected ? "#FFFFFF" : theme.colors.gray4};
    font-family: Pretendard;
    font-size: clamp(18px, 2vw, 24px);
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.64px;
`;