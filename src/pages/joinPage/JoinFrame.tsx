import * as S from "./JoinFrame.styled";
import Frame1 from "@assets/image/Frame1.svg";
import Frame2 from "@assets/image/Frame2.svg";
import Frame3 from "@assets/image/Frame3.svg";
import { JoinHeader } from "@components/join/JoinHeader";
import { CommonButton } from "@components/common/common.style";

export const JoinFrame = () => {
    const Frames = [Frame1, Frame2, Frame3]
    return(
        <S.Wrapper>
            <JoinHeader />
            <S.FrameContainer>
                {Frames.map((frame, index) => (
                    <S.FrameItem key={index} src={frame} />
                ))}
                <S.FrameEmpty>
                    프레임<span>X</span>
                </S.FrameEmpty>
            </S.FrameContainer>
            <S.Text>
                원하는 프레임을 선택해주세요!
            </S.Text>
            <CommonButton>
                <span>다음</span>
            </CommonButton>
        </S.Wrapper>
    );
};
