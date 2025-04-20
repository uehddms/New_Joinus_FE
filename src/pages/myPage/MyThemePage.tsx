import styled from "styled-components";
import MyHeader from "../../components/my/MyHeader";
import MyTheme from "../../components/my/theme/MyTheme";

const Layout = styled.div`
  width: 100%;
  font-family: pretendard;
`;

const MyThemePage = () => {
  return (
    <Layout>
      <MyHeader pageName={"어스테마 바꾸기"} />
      <MyTheme />
    </Layout>
  );
};

export default MyThemePage;
