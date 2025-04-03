import * as S from "./JoinUpload.styled";
import { CommonButton } from "@components/common/common.style";
import { JoinHeader } from "@components/join/JoinHeader";
import Plus from "@assets/icons/Plus.svg";

export const JoinUpload = () => {
    return (
        <S.Wrapper> 
            <JoinHeader />
            <S.ImageContainer>
                <S.Plus>
                    <img src={Plus} />
                </S.Plus>
            </S.ImageContainer>
            <S.TextContainer>
                <S.Green>
                    지구를 위한 나의 작은 실천을 담은 사진을 
                    <br/>
                    업로드해 주세요!
                </S.Green>
                <S.Red>
                    3:4 비율의 사진을 추천해요!
                </S.Red>
            </S.TextContainer>
            <CommonButton>
                <span>다음</span>
            </CommonButton>
        </S.Wrapper>
    );
};