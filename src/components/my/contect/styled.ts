import styled from "styled-components";

export const MyContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 31.25rem;
  margin: 0 auto;
  padding: 1.25rem;
  background-color: white;
`;
export const ContactText = styled.h2`
  margin-top: 40%;
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.05rem;
`;
export const SNSBox = styled.div`
  width: 15.625rem;
  height: 6.25rem;
  margin: 1.25rem auto;
  padding: 0.5rem;
  gap: 0.625rem;
  border-radius: 1.4375rem;
  border: 2px solid ${({ theme }) => theme.colors.primaryColor};
  background: #fff;
  color: ${({ theme }) => theme.colors.gray4};
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 200%;
  letter-spacing: -0.05rem;
  box-shadow: 0px 0px 0.625rem 0px rgba(0, 0, 0, 0.14);
  cursor: pointer;
`;
export const Bold = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  font-weight: 700;
`;
