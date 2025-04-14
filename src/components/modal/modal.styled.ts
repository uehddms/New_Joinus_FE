import { theme } from "@styles/theme";
import styled from "styled-components";

export const ReportModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  p {
    color: ${({ theme }) => theme.colors.gray5};
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.64px;
  }
`;

export const ReportModalTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;
interface ButtonProps {
  bgcolor?: keyof typeof theme.colors;
  border?: keyof typeof theme.colors;
}

export const ReportModalButton = styled.button<ButtonProps>`
  width: 41%;
  height: 100%;
  border-radius: 94px;
  background-color: ${({ bgcolor = "gray1", theme }) => theme.colors[bgcolor]};

  cursor: pointer;

  color: ${({ bgcolor, theme }) =>
    bgcolor ? theme.colors.white : theme.colors.black};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.8px;
`;

export const ReportModal2Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  > img {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export const ReportModal2TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  p {
    color: ${({ theme }) => theme.colors.gray5};
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.64px;
  }
`;
