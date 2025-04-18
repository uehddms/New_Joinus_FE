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

/* MyShoppinglist.jsx */
export const ShoppinglistMain = styled.div`
  margin-top: 3.125rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.875rem 1.25rem;
  width: 100%;
  max-height: 58vh;
  overflow-y: auto;
`;

export const CardContainer = styled.div`
  width: calc(50% - 1.25rem);
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  margin-left: 0.4375rem;
  margin-top: 0.625rem;
`;

export const ImgContainer = styled.div`
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0px 0px 0.75rem 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 6.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.625rem;
`;

export const MarketItemImg = styled.img`
  height: 90%;
`;

export const ItemNameContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 1.5rem;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 2.125rem;
  border: 1px solid #e0e0e0;
  background: #fff;
  margin-bottom: 0.5rem;
`;

export const ItemPointContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  height: 0.875rem;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  border-radius: 2.125rem;
  border: 1px solid #e0e0e0;
  background: #fff;
`;

export const ItemName = styled.span`
  margin: 0;
  color: #2e302d;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;

export const Point = styled.span`
  color: #417e59;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  color: var(--Primary-color, #417e59);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
`;
