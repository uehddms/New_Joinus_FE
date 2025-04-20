import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import UsRanking from "../components/us/UsRanking";
import UsStep from "../components/us/UsMain";
import UsBottom from "../components/us/UsStepCard";
import UsMarket from "../components/us/UsMarket";
import UsMenu from "../components/us/menu/UsMenu";
import MenuImg from "../assets/image/us/menu.svg";

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
        <UsWrapper>
          <MenuContainer>
            <MenuImage ref={menuButtonRef} src={MenuImg} onClick={toggleMenu} />
          </MenuContainer>
          <UsContentContainer>
            <UsRanking />
            <UsStep />
            <UsBottom />
            <UsMarket />
          </UsContentContainer>
        </UsWrapper>
      </Layout>
    </>
  );
};

export default UsPage;

const Layout = styled.div`
  padding: 0 10px;
  font-family: pretendard;
  max-height: calc(100vh - 78px);
  position: relative;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

const UsWrapper = styled.div`
  overflow-y: auto; /* 컨텐츠만 스크롤 */
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: left;
  align-items: center;
  padding: 0 1.25rem;
`;

const UsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -34px;
`;

const MenuImage = styled.img`
  z-index: 10;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  cursor: pointer;
`;
