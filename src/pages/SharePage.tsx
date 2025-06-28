import { useState } from "react";
import CardComponent from "@components/share/feed/CardComponent";
import ShareHeader from "@components/share/feed/ShareHeader";

const SharePage = () => {
  const [order, setOrder] = useState("최신순");
  return (
    <>
      <ShareHeader setOrder={setOrder} />
      <CardComponent order={order} />
    </>
  );
};
export default SharePage;
