import styled from "styled-components";

export const MyHeaderContainer = styled.div`
  display: flex;
  width: 12.5rem;
  justify-content: left;
  align-items: center;
  gap: 0.9375rem;
  flex-shrink: 0;
  margin: 1.25rem 0 0 3.75rem;
`;
export const Back = styled.img`
  cursor: pointer;
`;
export const PageIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;
export const PageName = styled.div`
  margin-left: -0.3125rem;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1.0625rem;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04rem;
`;
