import styled from "styled-components";
import MarketHeader from "../../components/market/MarketHeader";
import MarketDetail from "../../components/market/MarketDetail";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MarketDetailPage = () => {
  return (
    <Layout>
      <MarketHeader />
      <MarketDetail />
    </Layout>
  );
};

export default MarketDetailPage;
