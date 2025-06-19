import styled from "styled-components";
import { theme } from "@styles/theme";

interface ButtonProps {
  color?: keyof typeof theme.colors;
  bgcolor?: keyof typeof theme.colors;
  border?: keyof typeof theme.colors;
}

export const CommonButton = styled.button<ButtonProps>`
  width: 80%;
  height: 60px;

  border-radius: 94px;
  background-color: ${({ bgcolor = "primaryColor", theme }) => theme.colors[bgcolor]};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => {
    const bgcolor = props.bgcolor ?? "primaryColor";
    const border = props.border ?? bgcolor;
    return props.theme.colors[border];
  }};

  span {
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.8px;
  }

  color: ${({ color = "white", theme }) => theme.colors[color]};
  cursor: pointer;
`;
