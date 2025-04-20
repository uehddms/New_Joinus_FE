import MarketBannerImg from "@assets/image/market/MarketBanner.svg";
import styled from "styled-components";

const MarketBanner = () => {
  return (
    <MarketBannerContainer>
      <MarketBannerImage src={MarketBannerImg} />
    </MarketBannerContainer>
  );
};

export default MarketBanner;

const MarketBannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarketBannerImage = styled.img`
  width: 100%;
  height: auto;
`;
