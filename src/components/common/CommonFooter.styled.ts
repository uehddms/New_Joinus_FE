import styled from "styled-components";

export const Container = styled.section`
    display : flex;
    width: 88%;
    min-width: 353px;
    height: 72px;
    background-color: ${({ theme }) => theme.colors.gray1};
    stroke-width: 1.4px;
    stroke: ${({ theme }) => theme.colors.gray2};
    border-radius: 80px;
    justify-content: space-around;
    align-items: center;
`;

export const JoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 80px;
    width: 20%;
`

export const UsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 80px;
    width: 20%;
`

export const ShareContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 80px;
    width: 20%;
`;

export const RankContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 80px;
    width: 20%;
`

export const JoinImg = styled.img`

`

export const UsImg = styled.img`

`

export const ShareImg = styled.img`

`

export const RankImg = styled.img`

`