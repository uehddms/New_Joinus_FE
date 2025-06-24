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

  if (!card) return <div>로딩 중...</div>;

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.Image src={card.large_image_url} />
        <S.Text>실천카드가 완성되었어요!</S.Text>
      </S.ImageContainer>
      <S.BtnContainer>
        <S.CommonContainer>
          <CommonButton style={{ width: "100%", backgroundColor: "#4F8D64" }}>
            <span>공유에 업로드 하기</span>
          </CommonButton>
        </S.CommonContainer>
        <S.DownBtnContainer>
          <S.DownBtn>
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
