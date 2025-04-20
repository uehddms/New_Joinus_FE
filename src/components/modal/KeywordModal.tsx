import styled from "styled-components";
import * as S from "./modal.styled";
import { useCallback } from "react";

interface KeywordModalProps {
  onClose: () => void;
}

const KeywordModal = ({ onClose }: KeywordModalProps) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Wrapper onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <Title>키워드 선택</Title>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>
        <KeywordList>
          <KeywordItem>건강</KeywordItem>
          <KeywordItem>운동</KeywordItem>
          <KeywordItem>독서</KeywordItem>
          <KeywordItem>학습</KeywordItem>
          <KeywordItem>취미</KeywordItem>
          <KeywordItem>여행</KeywordItem>
          <KeywordItem>음식</KeywordItem>
          <KeywordItem>명상</KeywordItem>
        </KeywordList>
      </ModalContent>
    </Wrapper>
  );
};

export default KeywordModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray5};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray4};

  &:hover {
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const KeywordItem = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
