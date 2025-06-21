import styled from "styled-components";
import StoreFeedHeader from "@components/share/feed/StoreFeedHeader";
import StoredCardComponent from "@components/share/feed/StoredCardComponent";
const StoreFeedPage = () => {
  return (
    <>
      <StoreFeedHeader />
      <StoredCardComponent />
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
