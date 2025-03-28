import styled from "styled-components";

export const MenuContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute; /* fixed → absolute 유지 */
  padding-top: 20px;
  top: 0;
  left: 0;
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
  right: 40px;
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
  width: 24px;
  height: 24px;
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

export const Line = styled.div`
  width: 194px;
  height: 1px;
  background: #e0e0e0;
`;
