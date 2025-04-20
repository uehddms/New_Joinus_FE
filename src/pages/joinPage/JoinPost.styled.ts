import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: calc(100vh - 92px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = styled.div`
    display: flex;
    width: 88%;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.div`
    display: flex;
    gap: 20px;
`;

export const Back = styled.img`
    display: flex;
`;

export const Month = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.primaryColor};

    span {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        font-family: Pretendard;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.8px;
    }
`;

export const Keyword = styled.div`
    display: flex;
    height: 40px;
    padding: 8px 12px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    background: ${({ theme }) => theme.colors.gray1};
`;

export const Text = styled.div`
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
`;

export const Drop = styled.img`

`;

export const PostWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    height: 75vh;
    gap: 16px;
    margin: 16px 0 38px 0;

    @media (max-height: 800px) {
        gap: 8px;
        margin: 8px 0 19px 0;
    }
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
`;

export const Post = styled.img`
    max-height: 225px;
    flex-shrink: 0;
    border-radius: 8px;
    aspect-ratio: 169/225;

    /* @media (max-height: 800px) {
        height: 25vh;
    } */
`;

export const Day = styled.div`
    display: flex;
    width: 70px;
    height: 18px;
    padding: 2px 8px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 34px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    background: ${({ theme }) => theme.colors.gray1};
`;