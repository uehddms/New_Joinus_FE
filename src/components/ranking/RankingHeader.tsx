import styled from "styled-components";
import info from "@assets/icons/info.svg";

const RankingHeader = () => {
  return (
    <Wrapper>
      <h2>TOP 20</h2>
      <img src={info} alt="info" />
    </Wrapper>
  );
};

export default RankingHeader;

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  gap: 10px;
  h2 {
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray5};
  }
`;
