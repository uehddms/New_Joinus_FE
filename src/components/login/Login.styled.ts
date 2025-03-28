import styled from "styled-components";

export const ImgSection = styled.section`
  padding: 13vh 0 10vh 0;

  img {
    width: 50%;
  }
  @media (max-height: 800px) {
    padding: 8vh 0 6vh 0;
  }
`;
export const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;

  gap: 24px;
  align-items: center;

  width: 100%;
`;

export const Input = styled.input`
  width: 80%;
  height: 50px;
  padding: 1rem;
  border-radius: 69px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};
`;

export const FindPwBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0 10%;
`;
export const FindPwBtn = styled.button`
  width: auto;
  padding: 4px 8px;

  border-radius: 34px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray2};
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  padding: 5vh 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
