import styled from "styled-components";

export const MyQuitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 200px);
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: white;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const QuitNotice = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 175%;
  letter-spacing: -0.05rem;

  span {
    color: ${({ theme }) => theme.colors.negativeErrorCancel};
  }
`;

export const QuitBtnContainer = styled.div`
  margin-top: 2.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
