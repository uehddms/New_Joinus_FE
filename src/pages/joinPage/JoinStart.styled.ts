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

export const Text = styled.div`
    color: ${({ theme }) => theme.colors.gray5};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;

    span {
        color: ${({ theme }) => theme.colors.gray5};
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 24px */
        letter-spacing: -0.64px;
    }
`

export const Vector = styled.img`

`;