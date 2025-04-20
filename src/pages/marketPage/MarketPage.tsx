import styled from "styled-components";
import MarketHeader from "../../components/market/MarketHeader";
import MarketBanner from "../../components/market/MarketBanner";
import MarketList from "../../components/market/MarketList";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MarketPage = () => {
  return (
    <Layout>
      <MarketHeader />
      <MarketBanner />
      <MarketList />
    </Layout>
  );
};

export default MarketPage;
