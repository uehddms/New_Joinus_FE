import styled from "styled-components";

const MonthButton = ({
  children,
  onClick,
  isSelected,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
}) => {
  return (
    <ButtonContainer onClick={onClick} isSelected={isSelected}>
      {children}
    </ButtonContainer>
  );
};
export default MonthButton;

const ButtonContainer = styled.button<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};

  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray5};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primaryColor : "transparent"};
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.96px;

  cursor: pointer;
`;
