import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 92px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-top: 20%; */
    gap: 10px;
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    flex-shrink: 0;
    aspect-ratio: 313/417;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    background: ${({ theme }) => theme.colors.gray1};
    margin: 22px 0 11px 0;
`;

export const Plus = styled.div`

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 75%;
`;

export const Green = styled.div`
    text-align: left;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
`;

export const Red = styled.div`
    text-align: left;
    color: ${({ theme }) => theme.colors.red};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
`;

