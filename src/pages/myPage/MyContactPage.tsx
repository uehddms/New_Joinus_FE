import styled from "styled-components";
import MyHeader from "../../components/my/MyHeader";
import MyContact from "../../components/my/MyContect";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MyContactPage = () => {
  return (
    <Layout>
      <MyHeader pageName={"문의하기"} />
      <MyContact />
    </Layout>
  );
};

export default MyContactPage;
