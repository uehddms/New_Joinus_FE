import styled from "styled-components";

export const MyThemeContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const MyThemeMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ThemeBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem 0;
`;
export const SaveBox_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
`;

export const ThemeImg = styled.img`
  width: 11.25rem;
`;
export const ThemeTextBox = styled.div`
  margin-left: 1.5625rem;
  display: flex;
  align-items: center;
  gap: 8.75rem;
`;
export const ThemeText = styled.div`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2.125rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04rem;
`;
export const ThemeText_img = styled.img``;
export const ThemeSelectBtn_img = styled.img`
  cursor: pointer;
`;
export const Line = styled.div`
  width: calc(100% - 2.5rem);
  height: 1px;
  background: #e0e0e0;
  margin: 0 auto;
`;

export const ButtonSection = styled.div``;
