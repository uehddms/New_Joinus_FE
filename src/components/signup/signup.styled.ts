import styled from "styled-components";

export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 24px;
  align-items: center;

  width: 100%;
  p {
    padding-left: 15%;
    align-self: flex-start;

    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.96px;
  }
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  padding: 5vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckDupContainer = styled.div<{ isNickNameDup?: boolean | null }>`
  position: relative;
  width: 100%;
  p {
    position: absolute;
    top: 50px;
    right: 50px;
    color: ${({ theme, isNickNameDup }) =>
      isNickNameDup
        ? theme.colors.negativeErrorCancel
        : theme.colors.positiceSuccess};
    text-align: right;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;
export const CheckDuplication = styled.button`
  position: absolute;
  right: 60px;
  top: 13px;
  width: 55px;
  height: 24px;

  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
