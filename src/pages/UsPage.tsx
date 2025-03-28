import React, { useState } from "react";
import styled from "styled-components";
import UsRanking from "../components/us/UsRanking";
import UsStep from "../components/us/UsMain";
import UsBottom from "../components/us/UsStepCard";
import UsMarket from "../components/us/UsMarket";
import UsMenu from "../components/us/menu/UsMenu";
import menu from "../assets/img/us/menu.svg";

const Layout = styled.div`
  font-family: Pretendard;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  max-height: calc(100vh - 78px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Menu = styled.img`
  z-index: 1000;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 10px;
  margin-bottom: -40px;
  cursor: pointer;
`;

// 컴포넌트 타입 명시 React.FC
const UsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Layout>
        <Menu src={menu} onClick={toggleMenu} />
        {isMenuOpen && <UsMenu />}
        <UsRanking />
        <UsStep />
        <UsBottom />
        <UsMarket />
      </Layout>
    </>
  );
};

export default UsPage;
