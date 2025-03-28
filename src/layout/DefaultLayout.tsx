import styled from "styled-components";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(var(--vh, 1vh) * 100);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
