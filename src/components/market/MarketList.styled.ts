import styled from "styled-components";

export const MarketListWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 100%
    );
    pointer-events: none;
    z-index: 1;
  }
`;

export const MarketListContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
  padding-bottom: 8rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const MarketItem = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: white;
  border-radius: 1rem;
  gap: 0.4rem;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
  padding: 0.3rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  border-radius: 0.5rem;
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
`;

export const MarketItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ItemNameContainer = styled.div`
  width: 100%;
  display: flex;
  height: 1.5rem;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 2.125rem;
  box-shadow: 0px 0px 0.1rem rgba(0, 0, 0, 0.01);
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray5};
  font-family: Pretendard;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.04rem;
`;

export const ItemPointContainer = styled.div`
  display: flex;
  height: 1.125rem;
  padding: 0.125rem 0.5rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 0.1rem rgba(0, 0, 0, 0.01);
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;
  border-radius: 2.125rem;
  width: fit-content;

  &::after {
    content: " P";
    font-weight: 400;
    margin-left: 0.125rem;
  }
`;

export const Quit_Warning = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  grid-column: span 2;
  width: 100%;
  padding: 2rem 0;
`;
