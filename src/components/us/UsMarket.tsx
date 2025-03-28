import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import marketImg from "../../assets/img/us/market/marketImg.svg";
import frame1 from "../../assets/img/us/market/frame1.svg";
import frame2 from "../../assets/img/us/market/frame2.svg";
import sticker from "../../assets/img/us/market/sticker.svg";
import theme from "../../assets/img/us/market/theme.svg";

const UsBottom = () => {
  const [point, setPoint] = useState<number>(0);
  const navigate = useNavigate();

  // 포인트에 따른 item 반환
  const getItems = () => {
    if (point >= 5000) return [frame1, frame2, sticker, theme];
    if (point >= 4000) return [frame1, frame2, sticker];
    return [];
  };

  const handleMarketClick = () => {
    navigate("/market");
  };

  useEffect(() => {
    setPoint(10000);
  }, []);

  return (
    <S.UsMarketContainer>
      <S.MarketButton onClick={handleMarketClick}>
        <S.MarketText>마켓 가기</S.MarketText>
        <S.MarketImg src={marketImg} />
      </S.MarketButton>
      <S.MarketList>
        {[...Array(4)].map((_, index) => (
          <S.MarketItem key={index}>
            {index < getItems().length && (
              <img src={getItems()[index]} alt={`아이템${index + 1}`} />
            )}
          </S.MarketItem>
        ))}
      </S.MarketList>
      <S.MarketCommt>
        {point >= 4000
          ? "현재 포인트로 마켓에서 살 수 있는 것들이에요!"
          : "포인트 4000 이상부터 구매 가능합니다!"}
      </S.MarketCommt>
    </S.UsMarketContainer>
  );
};

export default UsBottom;
