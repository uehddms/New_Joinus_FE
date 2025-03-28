import styled from "styled-components";

export const Wrapper = styled.section`
    /* width: 88%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;

    @media (max-height: 800px) {
        height: 80%;
        margin-top: 5%;
    } 
`;

export const ImgWrapper = styled.div`
    display: flex;
    width: 88%;
    margin-bottom: 16px;

    @media (max-height: 800px) {
        width: 70%;
    } 
`;

export const ImgBox = styled.img`
    display: flex;
    width: 100%;
`

export const Text = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.gray4};
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: -0.48px;

    span {
        color: ${({ theme }) => theme.colors.gray5};
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: -0.48px;
    }
`;

export const MonthContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    width: 100%;

    @media (max-height: 800px) {
        width: 80%;
    } 
`;

export const Month = styled.div`
    display: flex;
    align-items: flex-start;
    border-radius: 24px;
    background: ${({ theme }) => theme.colors.primaryColor};
    /* width : 20%;
    height: 10%;  */
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    margin-bottom: 20px;
    margin-top: 25px;

    @media (max-height: 800px) {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 18px;
    } 

    span {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.96px;

        @media (max-height: 800px) {
            font-size: 16px;
        }
    }
`

export const MakeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 80px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    background: ${({ theme }) => theme.colors.gray1};
    padding: 16px 98px;
    margin-bottom: 80px;

    span {
        color: ${({ theme }) => theme.colors.gray5};
        text-align: center;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.8px;
        flex-shrink: 0;
    }

    @media (max-height: 800px) {
        width: 80%;
        padding: 12px 70px;
        font-size: 16px;
    } 
`

