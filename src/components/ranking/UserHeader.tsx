import { Link } from "react-router-dom";
import styled from "styled-components";
import backButton from "@assets/icons/BackBtn.svg";
import * as S from "./Rankin.style";
import { useTheme } from "styled-components";
export const UserHeader = ({ rank }: { rank: number }) => {
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
        }}
      >
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>
          {rank}
        </span>
      </S.RankScore>
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
