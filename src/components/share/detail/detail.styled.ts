import styled from "styled-components";
export const Wrapper = styled.header`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;

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

  position: relative;
  z-index: 1;

  padding-top: calc(80% * 3 / 2 + 60px);

  img:nth-of-type(1) {
    width: 80%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);

    z-index: 5;
    aspect-ratio: 2/3;

    border-radius: 10%;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.gray2};
  }

  img:nth-of-type(2) {
    width: 80%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);

    z-index: 3;

    border-radius: 10%;
  }
`;
