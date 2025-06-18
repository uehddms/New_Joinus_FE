import MyFeedHeader from "@components/share/feed/Myfeedheader";
import styled from "styled-components";
import MyCardComponent from "@components/share/feed/MyCardComponent";
const MyFeed = () => {
  return (
    <>
      <MyFeedHeader />
      <MyCardComponent />
      <Shadow />
    </>
  );
};

export default MyFeed;

const Shadow = styled.div`
  position: fixed;
  bottom: 0;

  width: 440px;
  height: 150px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  z-index: 10;
`;
