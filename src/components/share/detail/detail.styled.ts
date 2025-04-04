import styled from "styled-components";
export const Wrapper = styled.header`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;

  border: 1px solid black;

  img {
    width: 24px;
    height: 24px;
  }
  p {
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const CardContainer = styled.div`
  width: 100%;

  border-radius: 10%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};
`;
