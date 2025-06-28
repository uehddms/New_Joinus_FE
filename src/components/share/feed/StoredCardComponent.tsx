import { shareApi } from "@api/share/ShareApi";
import { useEffect, useState } from "react";
import styled from "styled-components";
import * as S from "./share.styled";
import { Link } from "react-router-dom";
import card from "@assets/image/cardContainer.png";
import leaf from "@assets/icons/leaf.png";

const StoredCardComponent = () => {
  const [data, setData] = useState<any[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async (
    cursor?: string,
    _direction: "next" | "previous" | null = null
  ) => {
    try {
      const response = await shareApi.getMyShare({
        are_targets_stored: true,
        cursor,
        page_size: 20,
      });
      setNext(response.next);
      setPrevious(response.previous);
      setData(response.results.sharedcards);
      console.log(response.results.sharedcards);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const handleScrollTop = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && previous && !isLoading) {
      fetch(previous, "previous");
    }
  };

  const handleScrollBottom = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && next && !isLoading) {
      fetch(next, "next");
    }
  };

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
  }, [next, previous, isLoading]);

  return (
    <Wrapper>
      <div id="observerTop" style={{ height: "10px" }}></div>
      {data.map((data) => (
        <S.CardContainer key={data.id} as={Link} to={`/feed/detail/${data.id}`}>
          <img src={card} alt="카드 프레임" />
          <img
            src={data.cardpost.small_image_url}
            alt="사용자가 추가한 이미지"
          />
          <img src={leaf} alt="point 모양" />
          <p>{data.like_count}</p>
        </S.CardContainer>
      ))}

      <div id="observerBottom" style={{ height: "10px" }}></div>
    </Wrapper>
  );
};

export default StoredCardComponent;

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  padding: 1rem;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
`;
