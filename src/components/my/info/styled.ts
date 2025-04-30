import styled from "styled-components";

/* MyContainer */
export const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: white;
`;

export const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const EditBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.875rem;
  height: 28.125rem;
`;

export const UsernameTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 1.0625rem;
  font-weight: 700;
  align-self: flex-start;
  text-align: left;
`;

export const UsernameCurrentBox = styled.div`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  border-radius: 1.5625rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: white;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

export const UsernameInputBox = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0 1.25rem;
  border-radius: 1.5625rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: white;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1rem;
  font-weight: 400;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

export const ValidationMessage = styled.div<{ isError: boolean }>`
  text-align: right;
  font-size: 0.75rem;
  margin-top: -0.3125rem;
  margin-left: 0.5rem;
  color: ${(props) => (props.isError ? "#DB7575" : "#73C56A")};
`;

export const ButtonSection = styled.div``;
