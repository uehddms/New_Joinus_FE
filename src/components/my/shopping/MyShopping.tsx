import { useState, useEffect } from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import sticker from "../../../assets/image/market/sticker.svg";
import theme from "../../../assets/image/market/theme.svg";
import frame1 from "../../../assets/image/market/frame1.svg";
import frame2 from "../../../assets/image/market/frame2.svg";
import { ShoppingApi } from "@api/my/ShoppingApi";
import Cookies from "js-cookie";

type shoppingItemType = {
  item_image: string | undefined;
  item: number;
  item_name: string;
  price: number;
};

const MyShoppinglist = () => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [itemData, setItemData] = useState<shoppingItemType[]>([]);

  const itemMap: {
    [key: string]: {
      item: number;
      item_image: string;
    };
  } = {
    "조인어스 스티커": {
      item: 1,
      item_image: sticker,
    },
    "조인어스 라라테마": {
      item: 2,
      item_image: theme,
    },
    "조인어스 프레임1": {
      item: 3,
      item_image: frame1,
    },
    "조인어스 프레임2": {
      item: 4,
      item_image: frame2,
    },
  };

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      alert("로그인이 되어 있지 않습니다.");
      return; // 토큰 없으면 아무 작업도 하지 않음
    }

    const fetchData = async () => {
      try {
        // setLoading(true);
        const data = await ShoppingApi.getShopping(); // 서버 응답

        const mappedData = (data || []).map((item: shoppingItemType) => {
          const mapped = itemMap[item.item_name] || {};
          return {
            item: mapped.item ?? 0, // item 번호 없으면 0
            item_image: mapped.item_image ?? "", // 이미지 없으면 빈값
            item_name: item.item_name,
            price: item.price,
          };
        });

        setItemData(mappedData);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <S.ShoppingWrapper>
      <S.MyShoppingContainer>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <Link
              key={index}
              to={`/market/detail/${item.item}`}
              style={{ textDecoration: "none" }}
            >
              <S.ShoppingItem>
                <S.ImgContainer>
                  <S.MarketItemImg src={item.item_image} alt={item.item_name} />
                </S.ImgContainer>
                <S.ItemNameContainer>{item.item_name}</S.ItemNameContainer>
                <S.ItemPointContainer>{item.price}</S.ItemPointContainer>
              </S.ShoppingItem>
            </Link>
          ))
        ) : (
          <S.Quit_Warning>구매한 아이템이 없습니다.</S.Quit_Warning>
        )}
      </S.MyShoppingContainer>
    </S.ShoppingWrapper>
  );
};

export default MyShoppinglist;
