import * as S from "./JoinCate.styled";
import { JoinHeader } from "@components/join/JoinHeader";
import { CommonButton } from "@components/common/common.style";

export const JoinCate = () => {
    const cates = [
        "대기전력",
        "재활용",
        "물절약",
        "분리배출",
        "다회용기",
        "친환경",
        "텀블러",
        "캠페인",
        "기타"
    ];

    return (
        <S.Wrapper>
            <JoinHeader />
            <S.Container>
                <S.CateContainer>
                {cates.map((cate, index) => (
                    <S.CateItem key={index}><span>{cate}</span></S.CateItem>
                ))}
                </S.CateContainer>
                <S.Content>
                    나의 실천은 어떤 키워드에 해당하나요?
                </S.Content>
            </S.Container>
            <CommonButton>
                <span>다음</span>
            </CommonButton>
        </S.Wrapper>
    );
};