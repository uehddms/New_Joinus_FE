import styled from "styled-components";
import card from "@assets/image/cardContainer.png";
import * as S from "./share.styled";
import leaf from "@assets/icons/leaf.png";
import pin from "@assets/icons/pin_unfilled.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { shareApi } from "@api/share/ShareApi";

const MyCardComponent = () => {
  const [data, setData] = useState<any[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetch = async (
    cursor?: string,
    direction: "next" | "previous" | null = null
  ) => {
    try {
      setIsLoading(true);
      const response = await shareApi.getMyShare({
        are_targets_stored: false,
        cursor,
        page_size: 20,
      });
      setNext(response.next);
      setPrevious(response.previous);
      setData(response.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetch();
    console.log(data);
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
          <img src={data.small_image_url} alt="사용자가 추가한 이미지" />
          <img src={leaf} alt="point 모양" />
          {data.is_pinned && (
            <img
              src={pin}
              alt="핀 모양"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                zIndex: 6,
                width: "24px",
                height: "24px",
              }}
            />
          )}
          <p>{data.like_count}</p>
        </S.CardContainer>
      ))}
      <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={card} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <img
          src={pin}
          alt="핀 모양"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: 6,
            width: "24px",
            height: "24px",
          }}
        />
        <p>100</p>
      </S.CardContainer>
      <div id="observerBottom" style={{ height: "10px" }}></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  padding: 1rem;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
`;

export default MyCardComponent;
