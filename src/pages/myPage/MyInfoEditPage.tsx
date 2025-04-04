import styled from "styled-components";
import MyHeader from "../../components/my/MyHeader";
import MyInfoEdit from "../../components/my/MyInfoEdit";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MyContactPage = () => {
  return (
    <Layout>
      <MyHeader pageName={"회원정보 수정"} />
      <MyInfoEdit />
    </Layout>
  );
};

export default MyContactPage;
