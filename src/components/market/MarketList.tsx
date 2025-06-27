import { useState, useEffect } from "react";
import * as S from "./MarketList.styled";
import { Link } from "react-router-dom";
import sticker from "../../assets/image/market/sticker.svg";
import theme from "../../assets/image/market/theme.svg";
import frame1 from "../../assets/image/market/frame1.svg";
import frame2 from "../../assets/image/market/frame2.svg";
import { itemListApi, itemListType } from "@api/market/ItemListApi";

const MarketList = () => {
  const [itemData, setItemData] = useState<
    (itemListType & { item_image: string })[]
  >([]);

  const imageMap: { [key: string]: string } = {
    "조인어스 스티커": sticker,
    "조인어스 라라테마": theme,
    "조인어스 프레임1": frame1,
    "조인어스 프레임2": frame2,
  };

  useEffect(() => {
    const fetchItemList = async () => {
      const res = await itemListApi.getItemList();
      const itemsWithImage = res.item.map((item: itemListType) => ({
        ...item,
        item_image: imageMap[item.item_name] || "", // 없을 경우 빈 문자열 처리
      }));
      setItemData(itemsWithImage);
    };

    fetchItemList();
  }, []);

  return (
    <S.MarketListWrapper>
      <S.MarketListContainer>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <Link
              key={index}
              to={`/market/detail/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <S.MarketItem>
                <S.ImgContainer>
                  <S.MarketItemImg src={item.item_image} alt={item.item_name} />
                </S.ImgContainer>
                <S.ItemNameContainer>{item.item_name}</S.ItemNameContainer>
                <S.ItemPointContainer>{item.price}</S.ItemPointContainer>
              </S.MarketItem>
            </Link>
          ))
        ) : (
          <S.Quit_Warning>마켓 아이템을 준비 중입니다.</S.Quit_Warning>
        )}
      </S.MarketListContainer>
    </S.MarketListWrapper>
  );
};

export default MarketList;
