import * as S from "./MarketDetail.styled";
import { useState } from "react";
import { CommonButton } from "@components/common/common.style";
import NoticeModal from "@components/modal/NoticeModal";
import YesNoModal from "@components/modal/YesNoModal";
import MDtheme from "@assets/image/market/MDtheme.svg";

const MarketDetail = () => {
  const detailData = {
    my_point: 10000,
    item: {
      item_name: "조인어스 라라 테마",
      item_image: MDtheme,
      price: 5000,
      description:
        "화려하고 마치 동화 속 세상 같은 라라테마로 당신의 어스를 변화시켜보세요!",
      description2: "(투명한 배경의 PNG 이미지입니다.)",
      note: "*어스 왼쪽 상단의 메뉴 아이콘 클릭>어스테마 바꾸기에서 테마 변경 가능합니다.",
    },
    button_text: "구매하기",
  };

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isPurchase, setIsPurchase] = useState(false);
  const [isYesNoModalOpen, setIsYesNoModalOpen] = useState(false);
  const [actionType, setActionType] = useState<"purchase" | "download">(
    "purchase"
  );

  const handlePurchase = () => {
    if (detailData.my_point >= detailData.item.price) {
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
          <S.Itemimg src={detailData.item?.item_image} />
        </S.ItemImgContainer>
        <S.ItemInfoContainer>
          <S.ItemText>{detailData.item?.item_name}</S.ItemText>
          <S.PointContainerWhite>
            {detailData.item?.price}P
          </S.PointContainerWhite>
        </S.ItemInfoContainer>
        <S.ItemDetailTextContainer>
          <S.ItemDetailText>
            {detailData.item?.description}
            {detailData.item?.description2 && (
              <>
                <br />
                <span>{detailData.item?.description2}</span>
              </>
            )}
          </S.ItemDetailText>
          <S.ItemDetailNote>{detailData.item?.note}</S.ItemDetailNote>
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
