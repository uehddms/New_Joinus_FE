import styled from "styled-components";

const MonthButton = ({ children }: { children: React.ReactNode }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};
export default MonthButton;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};

  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;

  cursor: pointer;
`;
