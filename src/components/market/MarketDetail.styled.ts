import styled from "styled-components";

export const MarketDetailContainer = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-top: 1rem;
  padding: 0 calc((100% - 320px) / 2);
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ItemImgContainer = styled.div`
  width: 19.5625rem;
  height: 19.5625rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background-color: #fff;
  display: flex;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Itemimg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ItemText = styled.div`
  color: #1a1e1b;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const PointContainerWhite = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  margin-right: 0.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid #e0e0e0;
  background: #f1f1f1;
  color: var(--Primary-color, #417e59);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const ItemDetailTextContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-right: 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
`;

export const ItemDetailText = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.04rem;

  span {
    color: ${({ theme }) => theme.colors.gray4};
    font-family: Pretendard;
    font-size: 0.875rem;
    letter-spacing: -0.035rem;
  }
`;

export const ItemDetailNote = styled.p`
  color: ${({ theme }) => theme.colors.negativeErrorCancel};
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.125rem */
  letter-spacing: -0.03rem;
`;

export const ButtonSection = styled.div`
  width: 100%;
  margin-top: 2.25rem;
`;
