import { Link } from "react-router-dom";
import styled from "styled-components";
import backButton from "@assets/icons/BackBtn.svg";
import * as S from "./Rankin.style";
import { useTheme } from "styled-components";
export const UserHeader = ({
  rank,
  username,
}: {
  rank: number;
  username: string;
}) => {
  const theme = useTheme();
  const isTop3 = rank <= 3;
  return (
    <Wrapper>
      <Link to="/rank">
        <img src={backButton} alt="뒤로가기 버튼" />
      </Link>
      <S.RankScore
        style={{
          backgroundColor: isTop3
            ? theme.colors.primaryColor
            : theme.colors.gray4,
          width: "30px",
          height: "30px",
        }}
      >
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>
          {rank}
        </span>
      </S.RankScore>
      <span style={{ marginLeft: 16, fontWeight: 700, fontSize: 18 }}>
        {username}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 50px;

  padding: 0 1rem;
`;
