import styled from "styled-components";

export const MyLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: white;
`;

export const ModalContainer = styled.div`
  margin-top: 40%;
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

export const Title = styled.h2`
  color: var(--Gray5, #2e302d);
  font-family: Pretendard;
  font-size: 1.25rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  width: 17.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const GreenBtn = styled.button`
  width: 8rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.05rem;
  cursor: pointer;
`;

export const GreyBtn = styled.button`
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
