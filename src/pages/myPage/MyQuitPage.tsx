import styled from "styled-components";
import MyHeader from "../../components/my/MyHeader";
import MyQuit from "../../components/my/quit/MyQuit";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MyQuitPage = () => {
  return (
    <Layout>
      <MyHeader pageName={"회원탈퇴"} />
      <MyQuit />
    </Layout>
  );
};

export default MyQuitPage;
