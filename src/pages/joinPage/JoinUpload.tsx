import * as S from "./JoinUpload.styled";
import { useRef, useState, useEffect } from "react";
import { CommonButton } from "@components/common/common.style";
import { JoinHeader } from "@components/join/JoinHeader";
import { useNavigate } from "react-router";
import Plus from "@assets/icons/Plus.svg";

export const JoinUpload = () => {
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const goCate = () => {
        navigate("/cate");
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
            sessionStorage.setItem("previewUrl", preview);
        }
    };

    useEffect(() => {
        const saved = sessionStorage.getItem("previewUrl");
        if (saved) {
            setPreviewUrl(saved);
        }
    }, []);

    return (
        <S.Wrapper> 
            <JoinHeader />
            <S.ImageContainer>
                <S.Plus onClick={handleImageClick}>
                    {previewUrl ? (
                        <img src={previewUrl} alt="업로드 이미지" className="preview" />
                    ) : (
                        <img src={Plus} alt="플러스 버튼" className="icon" />
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
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
            <CommonButton type="button" onClick={goCate}>
                <span>다음</span>
            </CommonButton>
        </S.Wrapper>
    );
};