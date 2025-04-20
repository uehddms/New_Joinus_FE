import styled from "styled-components";

export const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  padding-top: 10px;
  top: 0;
  left: 0px;
  width: 234px;
  height: 100%;
  background: white;
  z-index: 100;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
  transition: opacity 1.5s ease-in-out, transform 2s ease-out;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
  will-change: transform, opacity;
`;

export const Back = styled.img`
  cursor: pointer;
  position: absolute;
  right: 45px;
`;

export const MenuSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
export const MenuSection = styled.div`
  margin: auto 0;
  display: flex;
  width: 194px;
  height: 76px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const MenuHover = styled.div`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  &:hover {
    border-radius: 24px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.14);
    color: ${({ theme }) => theme.colors.gray5};

    ${Text} {
      font-weight: 700;
    }
  }
`;

export const Line = styled.div`
  width: 194px;
  height: 1px;
  background: #e0e0e0;
`;
