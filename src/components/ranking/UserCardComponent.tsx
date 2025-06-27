import { ApiwithToken } from "@api/ApiWithToken";
import { useEffect, useState } from "react";
import card from "@assets/image/cardContainer.png";
import leaf from "@assets/icons/leaf.png";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

interface cardData {
  id: number;
  sharedcards: {
    id: number;
  };
  cardpost: {
    small_image_url: string;
  };
  like_count: number;
}
const UserCardComponent = () => {
  const { id } = useParams();
  const [data, setData] = useState<cardData[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);

  const fetch = async (
    cursor?: string,
    _direction: "next" | "previous" | null = null
  ) => {
    const response = await ApiwithToken.get(`ranking/sharelist/${id}`, {
      params: {
        cursor: cursor,
        page_size: 20,
      },
    });
    setData(response.data.results);
    setNext(response.data.next);
    setPrevious(response.data.previous);
  };

  const handleScrollTop = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && previous) {
      fetch(previous, "previous");
    }
  };

  const handleScrollBottom = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && next) {
      fetch(next, "next");
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    const topObserver = new IntersectionObserver(handleScrollTop, {
      threshold: 0,
    });
    const bottomObserver = new IntersectionObserver(handleScrollBottom, {
      threshold: 0,
    });

    const topTarget = document.querySelector("#observerTop");
    const bottomTarget = document.querySelector("#observerBottom");

    if (topTarget) topObserver.observe(topTarget);
    if (bottomTarget) bottomObserver.observe(bottomTarget);

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, [next, previous]);

  return (
    <Wrapper>
      <div id="observerTop" style={{ height: "10px" }}></div>
      {data.map((data) => (
        <CardContainer
          key={data.sharedcards.id}
          as={Link}
          to={`/feed/detail/${data.sharedcards.id}`}
        >
          <img src={card} alt="카드 프레임" />
          <img
            src={data.cardpost.small_image_url}
            alt="사용자가 추가한 이미지"
          />
          <img src={leaf} alt="point 모양" />
          <p>{data.like_count}</p>
        </CardContainer>
      ))}

      <div id="observerBottom" style={{ height: "10px" }}></div>
    </Wrapper>
  );
};

export default UserCardComponent;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1rem;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  width: 45%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 5%;
  z-index: 1;
  padding-top: calc(90% * 2 / 3 + 60px);
  cursor: pointer;
  img:nth-of-type(1) {
    width: 90%; /* 너비를 90%로 고정 */
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    aspect-ratio: 2 / 3;
  }
  img:nth-of-type(2) {
    // 내부 이미지
    width: 90%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
    border-radius: 10px;
  }
  img:nth-of-type(3) {
    position: absolute;
    bottom: 10px;
    left: 10px;
    z-index: 6;
    width: 30px;
    height: auto;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 50px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 16px;
    font-weight: bold;
  }
`;
