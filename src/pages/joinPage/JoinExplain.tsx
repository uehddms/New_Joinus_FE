import * as S from "./JoinExplain.styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step0 from "@assets/icons/Step0.svg";
import Step1 from "@assets/icons/Step1.svg";
import Step2 from "@assets/icons/Step2.svg";
import Back from "@assets/icons/BackBtn.svg";
import Front from "@assets/icons/FrontBtn.svg";
import ExImage from "@assets/icons/ExImage.svg";
import Confirm from "@assets/icons/Confirm.svg";

export const JoinExplain = () => {
    const pages = [
        {
            title: <span>잠깐!</span>,
            image: <img src={Step0} />,
            content: <span>실천 카드는 무엇일까요?</span>
        },
        {
            title: "실천카드는",
            image: <img src={Step1} />,
            content: 
                <>
                    <span>환경을 보호</span>하는 우리의 모습을 담은 <br /> <span>한 장의 이미지 카드</span>에요!
                </>
        },
        {
            title: "실천카드 만들면 뭐가 좋아요?",
            image: <img src={Step2} /> ,
            content: 
                <>
                    실천카드를 통해<span> 환경을 위한 습관</span>들을 만들 수 있어요! <br/><br/>실천카드를 만들면 
                    <span> 포인트</span>가 적립되어, <br/> 조인어스가 준비한 다양한 것들을 구매할 수 있어요!
                </> 
        },
        {
            title: null,
            image: <img src={ExImage} />,
            content : 
                <>
                    환경을 위한 <span>나의 한 컷을 조인어스만의 프레임에 담아</span><br/>
                    실천카드를 만들어요!
                </>
        }
    ]
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const clickBack = () => {
        setStep(p => Math.max(p - 1, 0))
    };

    const clickFront = () => {
        setStep(p => Math.min(p + 1, pages.length - 1))
    };

    const clickConfirm = () => {
        navigate("/start");
    };

    return (
        <S.Wrapper step={step}>
            <S.Title>
                {pages[step].title}
            </S.Title>
            <S.Image>
                {pages[step].image}
            </S.Image>
            <S.Content step={step}>
                {pages[step].content}
            </S.Content>
            {step < pages.length - 1 && (
                <S.BtnContainer>
                    <S.Back src={Back} onClick={clickBack}/>
                    <S.Front src={Front} onClick={clickFront}/>
                </S.BtnContainer>
            )}
            {step === pages.length - 1 && (
                <S.ConfirmContainer>
                    <S.confirm src={Confirm} onClick={clickConfirm}/>
                </S.ConfirmContainer>
            )}            
        </S.Wrapper> 
    )
}
