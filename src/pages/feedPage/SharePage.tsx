import { useState } from "react";
import CardComponent from "@components/share/feed/CardComponent";
import ShareHeader from "@components/share/feed/ShareHeader";
import styled from "styled-components";

const SharePage = () => {
  const [order, setOrder] = useState("최신순");
  return (
    <>
      <ShareHeader setOrder={setOrder} />
      <CardComponent order={order} />
      <Shadow />
    </>
  );
};
export default SharePage;

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
