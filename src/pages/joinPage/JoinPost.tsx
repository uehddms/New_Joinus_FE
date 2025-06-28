import * as S from "./JoinPost.styled";
import Back from "@assets/icons/back.svg";
import Drop from "@assets/icons/Drop.svg";
import { useEffect, useState } from "react";
import { ApiwithToken } from "@api/ApiWithToken";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

// 키워드 한글-영문 매핑
const KEYWORD_MAP: { [kor: string]: string } = {
  전체: "ALL",
  대기전력: "STANDBY_POWER",
  재활용: "RECYCLING",
  물절약: "SAVING",
  분리배출: "SEPARATION",
  다회용기: "REUSABLE",
  친환경: "ECO_FRIENDLY",
  텀블러: "TUMBLER",
  캠페인: "CAMPAIGN",
  기타: "OTHER",
};
const KEYWORD_KOR_LIST = Object.keys(KEYWORD_MAP);

type CardPost = {
  id: number;
  keyword: string;
  small_image_url: string;
  created_at: string;
  [key: string]: any;
};

export const JoinPost = () => {
  const [allPosts, setAllPosts] = useState<CardPost[]>([]); // 전체 게시글
  const [posts, setPosts] = useState<CardPost[]>([]); // 실제 보여줄 게시글
  const navigate = useNavigate();
  const { month } = useParams();
  const selectedMonth = month ? parseInt(month) : new Date().getMonth() + 1;

  // 키워드 모달 상태 및 선택 키워드
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]); // 실제 적용
  const [tempSelectedKeywords, setTempSelectedKeywords] = useState<string[]>(
    []
  ); // 모달 내 임시 선택

  // 1. 모든 게시글 받아오기 (selectedKeywords와 무관하게)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const params: Record<string, unknown> = {
          month: selectedMonth,
          only_not_shared: false,
          ordered_by_is_shared: false,
        };
        const response = await ApiwithToken.get("join/cards/", { params });
        setAllPosts(response.data.cardposts as CardPost[]);
      } catch (err) {
        console.error("카드 목록 불러오기 실패:", err);
      }
    };
    fetchPosts();
  }, [selectedMonth]);

  // 2. 키워드로 프론트에서 필터링
  useEffect(() => {
    if (selectedKeywords.length === 0 || selectedKeywords.includes("ALL")) {
      setPosts(allPosts);
    } else {
      const keywordEngList = selectedKeywords.map((kor) => KEYWORD_MAP[kor]);
      setPosts(
        allPosts.filter((post) => keywordEngList.includes(post.keyword))
      );
    }
  }, [allPosts, selectedKeywords]);

  const backClick = () => {
    navigate(-1);
  };

  // 모달 열기: 임시 선택값을 현재 적용값으로 초기화
  const openModal = () => {
    setTempSelectedKeywords(selectedKeywords);
    setIsModalOpen(true);
  };

  // 키워드 선택/해제 (모달 내 임시 상태)
  const handleKeywordClick = (kor: string) => {
    if (kor === "전체") {
      setTempSelectedKeywords(["ALL"]);
      return;
    }
    if (tempSelectedKeywords.includes("ALL")) {
      setTempSelectedKeywords([kor]);
      return;
    }
    if (tempSelectedKeywords.includes(kor)) {
      setTempSelectedKeywords(tempSelectedKeywords.filter((k) => k !== kor));
    } else {
      setTempSelectedKeywords([...tempSelectedKeywords, kor]);
    }
  };

  // 모달 닫기(X): 임시 선택값을 실제 적용값으로 반영
  const closeModal = () => {
    setSelectedKeywords(tempSelectedKeywords);
    setIsModalOpen(false);
  };

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Left>
          <S.Back src={Back} onClick={backClick} />
          <S.Month>
            <span>{selectedMonth}월</span>
          </S.Month>
        </S.Left>
        <S.Keyword onClick={openModal} style={{ cursor: "pointer" }}>
          <S.Text>
            {selectedKeywords.length === 0 || selectedKeywords.includes("ALL")
              ? "키워드 선택"
              : selectedKeywords.join(" | ")}
          </S.Text>
          <S.Drop src={Drop} />
        </S.Keyword>
      </S.HeaderContainer>

      {/* 키워드 모달 */}
      {isModalOpen && (
        <>
          <ModalOverlay />
          <ModalBox>
            <ModalClose onClick={closeModal}>×</ModalClose>
            <ModalKeywordList>
              {KEYWORD_KOR_LIST.map((kor) => (
                <ModalKeywordBtn
                  key={kor}
                  selected={
                    tempSelectedKeywords.includes(kor) ||
                    (kor === "전체" && tempSelectedKeywords.includes("ALL"))
                  }
                  onClick={() => handleKeywordClick(kor)}
                >
                  {kor}
                </ModalKeywordBtn>
              ))}
            </ModalKeywordList>
            <ModalInfo>중복 선택 가능해요!</ModalInfo>
          </ModalBox>
        </>
      )}

      <S.PostWrapper>
        {posts.map((post, index) => (
          <S.PostContainer
            key={post.id || index}
            onClick={() => navigate(`/detail/${post.id}`)}
          >
            <S.Post src={post.small_image_url} />
            <S.Day>
              {new Date(post.created_at).toLocaleDateString("ko-KR")}
            </S.Day>
          </S.PostContainer>
        ))}
      </S.PostWrapper>
    </S.Wrapper>
  );
};

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #1b1b1b;
  opacity: 0.4;
  z-index: 1000;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 24px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  width: 92%;
  max-width: 400px;
  min-width: 240px;
  padding: 30px 5px;
  padding-top: 48px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 28px;
  color: #888;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
`;
const ModalKeywordList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 12px;
  justify-items: center;
`;
const ModalKeywordBtn = styled.button<{ selected?: boolean }>`
  border: none;
  outline: none;
  border-radius: 24px;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primaryColor : theme.colors.gray1};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.gray5};
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const ModalInfo = styled.div`
  color: #4f8d64;
  font-size: 14px;
  margin-bottom: 8px;
`;
