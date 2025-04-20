import styled from "styled-components";
import MyHeader from "../../components/my/MyHeader";
import MyLogout from "../../components/my/logout/MyLogout";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MyLogoutPage = () => {
  return (
    <Layout>
      <MyHeader pageName={"로그아웃"} />
      <MyLogout />
    </Layout>
  );
};

export default MyLogoutPage;
