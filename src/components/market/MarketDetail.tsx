import * as S from "./MarketDetail.styled";
import { useState, useEffect } from "react";
import { CommonButton } from "@components/common/common.style";
import NoticeModal from "@components/modal/NoticeModal";
import YesNoModal from "@components/modal/YesNoModal";

import sticker from "../../assets/image/market/sticker.svg";
import theme from "../../assets/image/market/theme.svg";
import frame1 from "../../assets/image/market/frame1.svg";
import frame2 from "../../assets/image/market/frame2.svg";
import { itemDetailApi, itemDetailType } from "@api/market/ItemDetailApi";
import { useParams } from "react-router";

const MarketDetail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<
    itemDetailType & { item_image: string }
  >();

  const imageMap: { [key: string]: string } = {
    "조인어스 스티커": sticker,
    "조인어스 라라테마": theme,
    "조인어스 프레임1": frame1,
    "조인어스 프레임2": frame2,
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const data = await itemDetailApi.getItemDetail(Number(id));
      if (data) {
        const matchedImage = imageMap[data.item_name] || "";
        const mergedData = {
          ...data,
          item_image: matchedImage,
        };
        setDetailData(mergedData);
        console.log("상세 아이템 데이터:", mergedData);
      }
    };

    fetchData();
  }, [id]);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [isYesNoModalOpen, setIsYesNoModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"purchase" | "download">(
    "purchase"
  );

  const handlePurchase = () => {
    if (!detailData) return;
    if (detailData.points >= detailData.price) {
      setIsYesNoModalOpen(true);
    } else {
      setIsErrorModalOpen(true);
      setTimeout(() => setIsErrorModalOpen(false), 1500);
    }
  };

  const confirmPurchase = () => {
    setIsYesNoModalOpen(false);
    setIsPurchaseModalOpen(true);
    setActionType("purchase");

    setTimeout(() => {
      setIsPurchaseModalOpen(false);
      setIsSuccessModalOpen(true);
      setIsPurchase(true);
      setTimeout(() => setIsSuccessModalOpen(false), 1500);
    }, 2000);
  };

  const download = () => {
    setActionType("download");
    setIsSuccessModalOpen(true);
    setTimeout(() => setIsSuccessModalOpen(false), 1500);
  };

  return (
    <S.MarketDetailContainer>
      {isErrorModalOpen && (
        <S.ModalContainer>
          <NoticeModal isAlert={true}>
            <>
              포인트가 부족해서 <br />
              상품을 구매할 수 없습니다.
            </>
          </NoticeModal>
        </S.ModalContainer>
      )}

      {isSuccessModalOpen && (
        <S.ModalContainer>
          <NoticeModal isAlert={false}>
            {actionType === "purchase" ? (
              <>
                구매가 완료되었습니다. <br />
                사용방법은 상품의 상세페이지에서 확인해주세요.
              </>
            ) : (
              "다운로드가 완료되었습니다."
            )}
          </NoticeModal>
        </S.ModalContainer>
      )}

      {isPurchaseModalOpen && (
        <S.ModalContainer>
          <NoticeModal isAlert={false}>구매를 진행 중입니다</NoticeModal>
        </S.ModalContainer>
      )}

      {isYesNoModalOpen && (
        <S.ModalContainer>
          <YesNoModal
            handleYes={confirmPurchase}
            handleNo={() => setIsYesNoModalOpen(false)}
            $noColor="primaryColor"
          >
            구매하시겠습니까?
          </YesNoModal>
        </S.ModalContainer>
      )}

      <S.MainContainer>
        <S.ItemImgContainer>
          <S.Itemimg src={detailData?.item_image} />
        </S.ItemImgContainer>
        <S.ItemInfoContainer>
          <S.ItemText>{detailData?.item_name}</S.ItemText>
          <S.PointContainerWhite>{detailData?.price}P</S.PointContainerWhite>
        </S.ItemInfoContainer>
        <S.ItemDetailTextContainer>
          <S.ItemDetailText>
            {detailData?.description}
            {/* {detailData?.description && (
              <>
                <br />
                <span>{detailData?.description}</span>
              </>
            )} */}
          </S.ItemDetailText>
          <S.ItemDetailNote>{detailData?.note}</S.ItemDetailNote>
        </S.ItemDetailTextContainer>
      </S.MainContainer>

      <S.ButtonSection>
        {isPurchase ? (
          <CommonButton onClick={download}>
            <span>다운받기</span>
          </CommonButton>
        ) : (
          <CommonButton
            color="white"
            bgcolor="primaryColor"
            onClick={handlePurchase}
          >
            <span>구매하기</span>
          </CommonButton>
        )}
      </S.ButtonSection>
    </S.MarketDetailContainer>
  );
};

export default MarketDetail;
