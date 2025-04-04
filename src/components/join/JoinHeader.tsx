import BackBtn from "@assets/icons/back.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const JoinHeader = () => {
    const navigate = useNavigate();

    const backClick = () => {
        navigate(-1);
    }
    
    return (
        <Back>
            <img src={BackBtn} onClick={backClick}/>
        </Back>
    );
};

const Back = styled.div`
    display: flex;
    width: 80%;
`