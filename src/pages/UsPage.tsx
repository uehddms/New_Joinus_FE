import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import UsRanking from "../components/us/UsRanking";
import UsStep from "../components/us/UsMain";
import UsBottom from "../components/us/UsStepCard";
import UsMarket from "../components/us/UsMarket";
import UsMenu from "../components/us/menu/UsMenu";
import menu from "../assets/img/us/menu.svg";

const Layout = styled.div`
  font-family: Pretendard;
  padding: 0 10px;
  max-height: calc(100vh - 78px);
  position: relative;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  overflow-y: auto; /* 컨텐츠만 스크롤 */
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Menu = styled.img`
  z-index: 10;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin: 20px 100px 0 -100px;
  cursor: pointer;
`;

// 컴포넌트 타입 명시 React.FC
const UsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLImageElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 외부 클릭 감지
  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Layout>
        {/* 메뉴 (항상 최상위 레이어) */}
        {isMenuOpen && (
          <UsMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            ref={menuRef}
          />
        )}

        {/* 기존 Us Page */}
        <ContentWrapper>
          <Menu ref={menuButtonRef} src={menu} onClick={toggleMenu} />
          <UsRanking />
          <UsStep />
          <UsBottom />
          <UsMarket />
        </ContentWrapper>
      </Layout>
    </>
  );
};

export default UsPage;
