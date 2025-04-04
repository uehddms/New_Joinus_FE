import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 92px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FrameContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px;
    margin: 16px 0 38px 0;

    @media (max-height: 800px) {
        gap: 8px;
        margin: 8px 0 19px 0;
    }
`;

export const FrameItem = styled.img`
    border-radius: 8px;
    aspect-ratio: 169/225;

    @media (max-height: 800px) {
        height: 25vh;
    }
`;

export const FrameEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.gray4};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;

    span {
        font-weight: 700;
    }
`;

export const Text = styled.div`
    display: flex;
    width: 70%;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
    margin-bottom: 24px;

    @media (max-height: 800px) {
        margin-bottom: 12px;
    }
`;