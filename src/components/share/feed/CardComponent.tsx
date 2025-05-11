import styled from "styled-components";
import card from "@assets/image/cardContainer.png";
import test from "@assets/image/testimg.png";
import * as S from "./share.styled";
import leaf from "@assets/icons/leaf.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface dogInterface {
  id: string;
  dogUrl: string;
}
const CardComponent = () => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // 개 api로 가져온 데이터
  const [data, setData] = useState<dogInterface[]>([]);
  const fetch = async () => {
    try {
      const response = await axios.get(
        `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${page}&limit=10`
      );
      const newData = response.data.map(
        (dogImg: { id: string; url: string }) => ({
          id: dogImg.id,
          dogUrl: dogImg.url,
        })
      );
      setData((prev) => [...prev, ...newData]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetch();
  }, [page]);

  // 무한 스크롤을 위한 핸들러
  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0, // 교차점이 발생하면 실행하도록
    });
    const observerTarget = document.querySelector("#observer");

    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, []);
  return (
    <Wrapper>
      {/* <S.CardContainer>
        <img src={card} alt="카드 프레임" />
        <img src={test} alt="사용자가 추가한 이미지" />
        <img src={leaf} alt="point 모양" />
        <p>100</p>
      </S.CardContainer> */}
      {data.map((data, index) => (
        <S.CardContainer key={index} as={Link} to={`/feed/detail/${index + 1}`}>
          <img src={card} alt="카드 프레임" />
          <img src={data.dogUrl} alt="사용자가 추가한 이미지" />
          <img src={leaf} alt="point 모양" />
          <p>100</p>
        </S.CardContainer>
      ))}
      <div id="observer" style={{ height: "10px" }}></div>
    </Wrapper>
  );
};

export default CardComponent;

const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  padding: 1rem;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
