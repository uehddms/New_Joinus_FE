import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ item }: { item: any }) => {
  return (
    <CardContainer>
      <Link to={`/share/make/${item.id}`}>
        <img src={item.small_image_url} alt="사용자가 추가한 이미지" />
        <CreatedAt>{item.created_at.split("T")[0]}</CreatedAt>
      </Link>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 45%;
  height: min-content;
  padding-top: calc(90% * 2 / 3 + 20px);
  position: relative;

  img {
    width: 90%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    aspect-ratio: 2 / 3;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
  }
`;

const CreatedAt = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
  width: 70px;
  height: 18px;
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};

  color: ${({ theme }) => theme.colors.gray4};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
