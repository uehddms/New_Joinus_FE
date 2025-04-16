import styled from "styled-components";

export const FeedContainer = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;

  height: 36px;

  padding: 0 0.5em;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 80px;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const PointSection = styled.section`
  width: 100%;
  padding: 12px 2rem 4px 1rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  gap: 8px;
`;
export const PointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;

  height: 20px;

  padding: 0 0.5em;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 80px;

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.gray3};
  }
  span:nth-of-type(3) {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const DescriptContainer = styled.div`
  width: 90%;

  margin: 0 1rem;
  padding: 0.75rem 0.25rem;

  display: flex;
  flex-direction: row;
  align-self: flex-start;

  align-items: center;

  gap: 2px;

  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  /* font-weight: 700; */
  line-height: normal;
  letter-spacing: -0.64px;
  color: ${({ theme }) => theme.colors.black};
  span:nth-of-type(2) {
    font-weight: bold;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const KeywordContainer = styled.div`
  padding: 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.8px;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const SortButton = styled.button`
  width: 90px;

  display: flex;
  justify-content: center;
  gap: 4px;

  background-color: inherit;

  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  font-weight: bold;

  margin: 8px 2rem 4px 0;
  padding: 0.25rem;

  align-self: flex-end;

  position: relative;

  img {
    width: 1rem;
  }
`;

export const UnSelectOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: absolute;

  top: 34px;

  z-index: 10;
`;

export const UnSelectedOptionItem = styled.button`
  width: 90px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem;

  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};

  color: ${({ theme }) => theme.colors.gray4};
  font-weight: 500;
`;

// CardComponent
export const CardContainer = styled.div`
  width: 45%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 5%;
  z-index: 1;
  padding-top: calc(90% * 2 / 3 + 60px);

  img:nth-of-type(1) {
    width: 90%; /* 너비를 90%로 고정 */
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    aspect-ratio: 2 / 3;
  }
  img:nth-of-type(2) {
    // 내부 이미지
    width: 90%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
  }
  img:nth-of-type(3) {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 6;
    width: 30px;
    height: auto;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 50px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 16px;
    font-weight: bold;
  }
`;

// MyFeedHeader

export const BackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  p {
    color: ${({ theme }) => theme.colors.gray5};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
  }
`;
