import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { CommonFooter } from "../components/common/CommonFooter";

export const FooterLayout = () => {
  return (
    <Wrapper>
      <Outlet />
      <CommonFooter />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
