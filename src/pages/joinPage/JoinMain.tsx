import * as S from "./JoinMain.styled";
import ImgBox from "../../assets/icons/ImgBox.svg";

export const JoinMain = () => {
    return (
        <S.Wrapper>
            <S.ImgWrapper>
                <S.ImgBox src={ImgBox} />
            </S.ImgWrapper>
            <S.Text>
                카드를&nbsp;<span>클릭해</span>&nbsp;이번달 실천카드를 확인해보세요! 
            </S.Text>
            <S.MonthContainer>
                <S.Month>
                    <span>예시</span>
                </S.Month>
            </S.MonthContainer>
            <S.MakeBtn>
                <span>실천카드 만들러 가기</span>
            </S.MakeBtn>
        </S.Wrapper>
    )
}