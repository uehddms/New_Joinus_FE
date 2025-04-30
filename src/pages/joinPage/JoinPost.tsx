import * as S from "./JoinPost.styled";
import Back from "@assets/icons/back.svg";
import Drop from "@assets/icons/Drop.svg";
import imageFrame from "@assets/icons/imageFrame.svg";

export const JoinPost = () => {
    return (
        <S.Wrapper>
            <S.HeaderContainer>
                <S.Left>
                    <S.Back src={Back} />
                    <S.Month>
                        <span>3월</span>
                    </S.Month>
                </S.Left>
                <S.Keyword>
                    <S.Text>
                        키워드 선택
                    </S.Text>
                    <S.Drop src={Drop} />
                </S.Keyword>
            </S.HeaderContainer>
            <S.PostWrapper>
                {Array.from({ length: 10 }).map((_, index) => (
                    <S.PostContainer key={index}>
                        <S.Post src={imageFrame} />
                        <S.Day>2025.3.11</S.Day>
                    </S.PostContainer>
                ))}
            </S.PostWrapper>
        </S.Wrapper>
    )
}
