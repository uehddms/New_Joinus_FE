import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 92px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
`

export const Image = styled.img`
    width: 88%;
    aspect-ratio: 313/417;
    height: auto;
    border-radius: 24px;
`;

export const Text = styled.div`
    color: ${({ theme }) => theme.colors.primaryColor};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.64px;
    text-align: left;
    width: 80%;
`;

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const CommonContainer = styled.div`
    position: relative;
    min-width: 277px;
`

export const Point = styled.div`
    position: absolute;
    top: -15%;
    right: 2%;
    border-radius: 80px;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray1};

    span {
        color: ${({ theme }) => theme.colors.primaryColor};
        text-align: center;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.48px;
    }
`

export const DownBtnContainer = styled.div`
    position: relative;
`

export const DownBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const BackContainer = styled.div`
    display: flex;
    width: 88%;
    justify-content: flex-end;
`;

export const JoinBack = styled.div`
    display: flex;
    align-items: center;
    margin-top: 36px;
    gap: 8px;
    padding: 4px 12px;
    border-radius: 34px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    background: ${({ theme }) => theme.colors.gray1};
`

export const Back = styled.img`
`

export const Comment = styled.div`
    color: ${({ theme }) => theme.colors.gray5};
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.64px;
`;
