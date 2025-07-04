import leaf from "@assets/icons/leaf.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface UserCardComponentProps {
  sharedcards: {
    id: number;
    cardpost: {
      id: number;
      keyword: string;
      small_image_url: string;
      created_at: string;
    };
    description: string;
    like_count: number;
    created_at: string;
  }[];
}

const UserCardComponent = ({ sharedcards }: UserCardComponentProps) => {
  console.log(sharedcards);
  return (
    <Wrapper className="user-card-component">
      {sharedcards.map((data) => (
        <CardContainer key={data.id} as={Link} to={`/feed/detail/${data.id}`}>
          <img
            src={data.cardpost.small_image_url}
            alt="사용자가 추가한 이미지"
          />
          <img src={leaf} alt="point 모양" />
          <p>{data.like_count}</p>
        </CardContainer>
      ))}
    </Wrapper>
  );
};

export default UserCardComponent;

const Wrapper = styled.div`
  width: 100%;
  max-width: 440px;
  height: 80vh;
  max-height: 75vh;
  overflow-y: auto;
  margin: 0 auto;
  padding: 1rem;

  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* width: 100%;
  max-width: 440px;
  height: 80vh;
  max-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  overflow: auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개씩 정렬 */
`;

const CardContainer = styled.div`
  width: 48%;
  height: min-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${({ theme }) => theme.colors.gray2};
  border-radius: 5%;
  z-index: 1;
  padding-top: calc(100% * 2 / 3 + 60px);

  cursor: pointer;
  img:nth-of-type(1) {
    width: 90%;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    aspect-ratio: 2 / 3;
    border-radius: 10px;
  }
  img:nth-of-type(2) {
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
