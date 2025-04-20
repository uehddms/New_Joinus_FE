import styled from "styled-components";

interface MyModalProps {
  handleYes: () => void;
  handleNo: () => void;
  children: React.ReactNode;
  $noColor: string;
}

const MyModal = ({ handleYes, handleNo, $noColor, children }: MyModalProps) => {
  return (
    <ModalContainer>
      <Title>{children}</Title>
      <BtnContainer>
        <YesBtn onClick={handleYes}>네</YesBtn>
        <NoBtn onClick={handleNo} bgColor={$noColor}>
          아니요
        </NoBtn>
      </BtnContainer>
    </ModalContainer>
  );
};

export default MyModal;

const ModalContainer = styled.div`
  display: flex;
  width: 20rem;
  padding: 1rem 1.0625rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 1.25rem;
`;

const BtnContainer = styled.div`
  display: flex;
  width: 17.5rem;
  justify-content: space-between;
  align-items: center;
`;

const YesBtn = styled.button`
  width: 8rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;
`;

const NoBtn = styled.button<{ bgColor: string }>`
  width: 8rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: ${({ bgColor = "primaryColor", theme }) => theme.colors[bgColor]};
  color: ${({ theme }) => theme.colors.white};
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.05rem;
  cursor: pointer;
`;
