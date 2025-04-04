import styled from "styled-components";

interface ContentProps {
    step: number;
}  

interface WrapperProps {
    step: number;
}

export const Wrapper = styled.section<WrapperProps>`
    width: 100%;
    height: ${({ step }) => (step === 3? "85vh" : "95vh")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.div`
    color: ${({ theme }) => theme.colors.primaryColor};
    text-align: center;
    font-family: Pretendard;
    font-size: clamp(16px, 3vw, 20px);
    font-style: normal;
    font-weight: 800;
    line-height: 150%; /* 30px */
    letter-spacing: -0.8px;

    span {
        color: ${({ theme }) => theme.colors.red};
    }
`;

export const Image = styled.div`
    display: flex;
    margin: 40px 0 30px 0;
`;

export const Content = styled.div<ContentProps>`
    color: ${({ theme }) => theme.colors.gray5};
    font-family: Pretendard;
    font-size: clamp(16px, 3vw, 20px);
    font-style: normal;
    font-weight: 400;
    /* line-height: 150%; */
    letter-spacing: -0.8px;
    text-align: ${({ step }) => (step === 3 ? "left" : "inherit")};

    span {
        color: ${({ theme, step }) => 
        step === 3 ? theme.colors.primaryColor : theme.colors.gray5};
        font-weight: 700;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    margin-top: 112px;
    gap: 100px;
`

export const Back = styled.img`

`;

export const Front = styled.img`

`;

export const ConfirmContainer = styled.div`
    display: flex;
    width: 65%;
    justify-content: flex-end;
    margin-top: 10px;
`

export const confirm = styled.img`

`;