import styled from "styled-components";
import MyHeader from "../../components/my/MyHeader";
import MyShopping from "../../components/my/shopping/MyShopping";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MyShoppinglistPage = () => {
  return (
    <Layout>
      <MyHeader pageName={"구매목록"} />
      <MyShopping />
    </Layout>
  );
};

export default MyShoppinglistPage;
