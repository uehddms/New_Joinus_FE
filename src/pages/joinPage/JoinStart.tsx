import * as S from "./JoinStart.styled";
import Vector from "../../assets/icons/Vector.svg";
import { CommonButton } from "../../components/common/common.style";
import { useNavigate } from "react-router";

export const JoinStart = () => {
    const navigate = useNavigate()

    const goMake = () => {
        navigate("/upload");
    };

    return (
        <S.Wrapper>
            <S.Text>
                그럼 한 번 <span>나만의 실천카드</span>를 만들어볼까요?
            </S.Text>
            <S.Vector src={Vector} />
            <CommonButton type="button" onClick={goMake}>
                <span>실천카드 만들러가기</span>
            </CommonButton>
        </S.Wrapper>
    )
}