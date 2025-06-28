import styled from "styled-components";

export const Wrapper = styled.section`
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
    width: 70vw;
    max-width: 320px;
    margin-bottom: 16px;
    position: relative;

    @media (max-height: 800px) {
        width: 55vw;
        max-width: 240px;
    } 
`;

export const ImgBox = styled.img`
    display: flex;
    width: 100%;
    border-radius: 24px;
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
    width: 88%;
    max-width: 100vw;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
    @media (max-height: 800px) {
        width: 88%;
        max-width: 100vw;
    } 
`;

export const Month = styled.div<{
  selected?: boolean;
}>`
    display: flex;
    align-items: flex-start;
    border-radius: 24px;
    background: ${({ selected, theme }) => selected ? theme.colors.primaryColor : theme.colors.white};
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    margin-bottom: 20px;
    margin-top: 25px;
    margin-right: 12px;
    cursor: pointer;
    border: ${({ selected, theme }) => selected ? 'none' : `1.5px solid ${theme.colors.gray2}`};
    @media (max-height: 800px) {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        border-radius: 18px;
    } 
    span {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ selected, theme }) => selected ? theme.colors.white : theme.colors.gray5};
        text-align: center;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.96px;
        @media (max-height: 800px) {
            font-size: 14px;
        }
    }
`

export const MakeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88%;
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

export const FrameContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
`;

export const FrameOverlay = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

