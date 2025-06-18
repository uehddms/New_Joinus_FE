import styled from "styled-components";
import { useCallback } from "react";

interface KeywordModalProps {
  onClose: () => void;
  selectedKeywords: string[];
  onKeywordSelect: (keyword: string) => void;
}

const KeywordModal = ({
  onClose,
  selectedKeywords,
  onKeywordSelect,
}: KeywordModalProps) => {
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
          <KeywordItem
            onClick={() => onKeywordSelect("전체")}
            isSelected={selectedKeywords.includes("전체")}
          >
            전체
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("대기전력")}
            isSelected={selectedKeywords.includes("대기전력")}
          >
            대기전력
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("재활용")}
            isSelected={selectedKeywords.includes("재활용")}
          >
            재활용
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("물절약")}
            isSelected={selectedKeywords.includes("물절약")}
          >
            물절약
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("분리배출")}
            isSelected={selectedKeywords.includes("분리배출")}
          >
            분리배출
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("다회용기")}
            isSelected={selectedKeywords.includes("다회용기")}
          >
            다회용기
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("친환경")}
            isSelected={selectedKeywords.includes("친환경")}
          >
            친환경
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("텀블러")}
            isSelected={selectedKeywords.includes("텀블러")}
          >
            텀블러
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("캠페인")}
            isSelected={selectedKeywords.includes("캠페인")}
          >
            캠페인
          </KeywordItem>
          <KeywordItem
            onClick={() => onKeywordSelect("기타")}
            isSelected={selectedKeywords.includes("기타")}
          >
            기타
          </KeywordItem>
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

const KeywordItem = styled.button<{ isSelected?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primaryColor : theme.colors.gray1};
  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primaryColor : theme.colors.gray2};
  border-radius: 20px;
  font-size: 14px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray5};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: white;
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
