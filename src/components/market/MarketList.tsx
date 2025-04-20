import { useState } from "react";
import * as S from "./MarketList.styled";
import { Link } from "react-router-dom";
import sticker from "../../assets/image/market/sticker.svg";
import theme from "../../assets/image/market/theme.svg";
import frame1 from "../../assets/image/market/frame1.svg";
import frame2 from "../../assets/image/market/frame2.svg";

const MarketList = () => {
  const [itemData] = useState([
    {
      item: 1,
      item_image: sticker,
      item_name: "조인어스 디지털 스티커",
      price: 3000,
    },
    {
      item: 2,
      item_image: theme,
      item_name: "조인어스 라라테마",
      price: 4000,
    },
    {
      item: 3,
      item_image: frame1,
      item_name: "조인어스 프레임1",
      price: 3000,
    },
    {
      item: 4,
      item_image: frame2,
      item_name: "조인어스 프레임2",
      price: 3000,
    },
  ]);
  //   const [loading, setLoading] = useState(false);
  //   const token = Cookies.get("access_token");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         setLoading(true);
  //         const response = await apiCall(
  //           "/users/order_detail",
  //           "GET",
  //           null,
  //           token
  //         );
  //         setItemData(response.data || []);
  //         if (response.data) {
  //           setLoading(false);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, [token]);

  return (
    <S.MarketListWrapper>
      <S.MarketListContainer>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <Link
              key={index}
              to={`/market/detail/${item.item}`}
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
          <S.Quit_Warning>구매한 아이템이 없습니다.</S.Quit_Warning>
        )}
      </S.MarketListContainer>
    </S.MarketListWrapper>
  );
};

export default MarketList;
