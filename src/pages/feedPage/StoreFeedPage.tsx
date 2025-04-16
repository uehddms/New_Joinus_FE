import styled from "styled-components";
import CardComponent from "@components/share/feed/CardComponent";
import StoreFeedHeader from "@components/share/feed/StoreFeedHeader";
const StoreFeedPage = () => {
  return (
    <>
      <StoreFeedHeader />
      <CardComponent />
      <Shadow />
    </>
  );
};

export default StoreFeedPage;
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
