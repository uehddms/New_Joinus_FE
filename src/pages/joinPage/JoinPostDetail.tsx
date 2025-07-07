import * as S from "./JoinPostDetail.styled";
import { CommonButton } from "@components/common/common.style";
import Down from "@assets/icons/Down.svg";
import DownLeft from "@assets/icons/DownLeft.svg";
import { ApiwithToken } from "@api/ApiWithToken";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

export const JoinPostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      try {
        const response = await ApiwithToken.get(`join/cards/${parseInt(id!)}/`);
        setCard(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("카드 상세 불러오기 실패:", err);
        alert("카드 정보를 불러오는 데 실패했습니다.");
      }
    };

    fetchDetail();
  }, [id]);

  const goJoin = () => {
    navigate("/join");
  };

  const handleDownload = async () => {
    if (!card?.large_image_url) return;
    try {
      const response = await fetch(card.large_image_url, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "실천카드.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert(
        "이미지 저장에 실패했습니다. 브라우저 정책 또는 서버 설정(CORS) 문제일 수 있습니다."
      );
    }
  };

  if (!card) return <div>로딩 중...</div>;

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.Image src={card.large_image_url} />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Text>실천카드가 완성되었어요!</S.Text>
      </S.TextContainer>
      <S.BtnContainer>
        <S.CommonContainer>
          <CommonButton style={{ width: "100%", backgroundColor: "#4F8D64" }}>
            <span>공유에 업로드 하기</span>
          </CommonButton>
        </S.CommonContainer>
        <S.DownBtnContainer>
          <S.DownBtn onClick={handleDownload}>
            <img src={Down} />
          </S.DownBtn>
        </S.DownBtnContainer>
      </S.BtnContainer>
      <S.BackContainer>
        <S.JoinBack>
          <S.Back src={DownLeft} />
          <S.Comment onClick={goJoin}>조인으로 돌아가기</S.Comment>
        </S.JoinBack>
      </S.BackContainer>
    </S.Wrapper>
  );
};
