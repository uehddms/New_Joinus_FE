import styled from "styled-components";
import Alert from "@assets/icons/Alert.svg";
import Smile from "@assets/icons/Smile.svg";

interface MyModalProps {
  children: React.ReactNode;
  isAlert: boolean;
}

const NoticeModal = ({ children, isAlert = true }: MyModalProps) => {
  return (
    <ModalContainer>
      <Icon src={isAlert ? Alert : Smile} />
      <Text>{children}</Text>
    </ModalContainer>
  );
};

export default NoticeModal;

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

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const Text = styled.h2`
  color: ${({ theme }) => theme.colors.gray5};
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.04rem;
`;
