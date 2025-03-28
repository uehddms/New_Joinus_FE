import styled from "styled-components";
import { theme } from "@styles/theme";

interface ButtonProps {
  color?: keyof typeof theme.colors;
  border?: keyof typeof theme.colors;
}

export const CommonButton = styled.button<ButtonProps>`
  width: 80%;
  height: 60px;

  border-radius: 94px;
  background-color: ${({ color = "gray2", theme }) => theme.colors[color]};
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) => {
    const color = props.color ?? "gray2";
    const border = props.border ?? color;
    return props.theme.colors[border];
  }};

  color: ${({ theme }) => theme.colors.white};
`;
