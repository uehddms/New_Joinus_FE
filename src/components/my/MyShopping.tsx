import { useState, useEffect } from "react";
import * as S from "./My.styled";
import { Link } from "react-router-dom";

const MyShoppinglist = () => {
  const [itemData, setItemData] = useState([
    {
      item: 1,
      item_image: "https://via.placeholder.com/150",
      item_name: "에코백",
      price: "5,000 포인트",
    },
    {
      item: 2,
      item_image: "https://via.placeholder.com/150",
      item_name: "텀블러",
      price: "10,000 포인트",
    },
    {
      item: 3,
      item_image: "https://via.placeholder.com/150",
      item_name: "다회용 컵",
      price: "7,000 포인트",
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
    <>
      <S.MyContainer>
        <S.ShoppinglistMain>
          {itemData.length > 0 ? (
            itemData.map((item, index) => (
              <S.CardContainer key={index}>
                <Link
                  to={`/market/detail/${item.item}`}
                  style={{ textDecoration: "none" }}
                >
                  <S.ImgContainer>
                    <S.MarketItemImg
                      src={item.item_image}
                      alt={item.item_name}
                    />
                  </S.ImgContainer>
                  <S.ItemNameContainer>
                    <S.ItemName>{item.item_name}</S.ItemName>
                  </S.ItemNameContainer>
                  <S.ItemPointContainer>
                    <S.Point>{item.price}</S.Point>
                  </S.ItemPointContainer>
                </Link>
              </S.CardContainer>
            ))
          ) : (
            <S.Quit_Warning>구매한 아이템이 없습니다.</S.Quit_Warning>
          )}
        </S.ShoppinglistMain>
      </S.MyContainer>
    </>
  );
};

export default MyShoppinglist;
