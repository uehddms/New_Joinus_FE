import styled from "styled-components";
import * as S from "./detail.styled";

import leaf from "@assets/icons/leaf.png";
import noneleaf from "@assets/icons/noneleaf.png";
import more from "@assets/icons/more-horizontal.svg";
import { useEffect, useState, useRef } from "react";
import ReportModal from "@components/modal/ReportModal";
import ReportModal2 from "@components/modal/ReportModal2";
import { ApiwithToken } from "@api/ApiWithToken";
import { shareApi } from "@api/share/ShareApi";

const CardDetail = ({
  data,
  id,
  setData,
  isOwner,
  isPinned,
}: {
  data: any;
  id: string;
  setData: (data: any) => void;
  isOwner: boolean;
  isPinned: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isReportModal2Open, setIsReportModal2Open] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeletedModalOpen, setIsDeletedModalOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [isStoredModalOpen, setIsStoredModalOpen] = useState(false);

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const handleReportModal = () => {
    setIsReportModalOpen(!isReportModalOpen);
  };

  const handleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const onConfirm = async () => {
    setIsReportModalOpen(false);
    setIsReportModal2Open(true);
  };
  const handleShare = async () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다.");
  };
  const handlePin = async () => {
    try {
      await ApiwithToken.post(`share/pins/`, {
        sharedcard: id,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleStore = () => {
    setIsStoreModalOpen(true);
  };
  const handleEdit = async () => {
    window.location.href = `/share/edit/${id}`;
  };
  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleLike = async () => {
    try {
      if (data.is_liked) {
        // 이미 좋아요 상태면 DELETE
        await ApiwithToken.delete(`share/likes/`, {
          data: { sharedcard: id },
        });
      } else {
        // 좋아요 안 눌린 상태면 POST
        await ApiwithToken.post("share/likes/", {
          sharedcard: id,
        });
      }
      // 좋아요 상태 변경 후 상세 데이터 다시 불러오기
      const response = await shareApi.getShareDetail({ id: Number(id) });
      setData(response);
    } catch (e) {
      console.log(e);
    }
  };

  const confirmDelete = async () => {
    try {
      await ApiwithToken.delete(`share/sharedcards/${id}`);
      setIsDeleteModalOpen(false);
      setIsDeletedModalOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  const closeDeletedModal = () => {
    setIsDeletedModalOpen(false);
    // 필요하다면 페이지 이동 등 추가
  };

  const confirmStore = async () => {
    try {
      await ApiwithToken.post(`share/store/`, {
        sharedcard: id,
      });
      setIsStoreModalOpen(false);
      setIsStoredModalOpen(true);
    } catch (e) {
      setIsStoreModalOpen(false);
      setIsStoredModalOpen(true);
      console.log(e);
    }
  };

  const closeStoredModal = () => {
    setIsStoreModalOpen(false);
    setIsStoredModalOpen(false);
  };

  // 텍스트 오버플로우 체크
  useEffect(() => {
    if (titleRef.current) {
      // isExpanded가 false일 때만 overflow 체크
      if (!isExpanded) {
        setIsOverflow(
          titleRef.current.scrollWidth > titleRef.current.clientWidth ||
            titleRef.current.scrollHeight > titleRef.current.clientHeight
        );
      }
    }
  }, [data, isExpanded]);

  if (!data) return null;

  return (
    <Wrapper>
      <S.CardContainer>
        <img
          src={data.cardpost.large_image_url}
          alt="사용자 추가 이미지"
          className="user-image"
        />

        <S.ContentContainer>
          <S.Container>
            <S.PointContainer>
              <img
                src={data.is_liked ? leaf : noneleaf}
                alt="point 로고"
                onClick={handleLike}
              />
              <p>{data.like_count}</p>
            </S.PointContainer>
            <img src={more} alt="더보기" onClick={handleMore} />
            {isMoreOpen && (
              <S.MoreMenuContainer>
                {isOwner ? (
                  <>
                    <S.MoreMenu>
                      <button onClick={handleShare}>공유</button>
                    </S.MoreMenu>
                    <S.MoreMenu>
                      <button onClick={handlePin}>
                        {isPinned ? "해지" : "고정"}
                      </button>
                    </S.MoreMenu>
                    <S.MoreMenu>
                      <button onClick={handleStore}>보관</button>
                    </S.MoreMenu>
                    <S.MoreMenu>
                      <button onClick={handleEdit}>수정</button>
                    </S.MoreMenu>
                    <S.MoreMenu>
                      <button onClick={handleDelete}>삭제</button>
                    </S.MoreMenu>
                  </>
                ) : (
                  <>
                    <S.MoreMenu>
                      <button onClick={handleShare}>공유</button>
                    </S.MoreMenu>
                    <S.MoreMenu>
                      <button onClick={handleReportModal}>신고</button>
                    </S.MoreMenu>
                  </>
                )}
              </S.MoreMenuContainer>
            )}
          </S.Container>
        </S.ContentContainer>
        <S.Title ref={titleRef} isExpanded={isExpanded}>
          {data.description}
        </S.Title>
        {isOverflow && (
          <S.Button onClick={handleToggleText}>
            {isExpanded ? "접기" : "...더보기"}
          </S.Button>
        )}
      </S.CardContainer>
      {isReportModalOpen && (
        <ReportModal
          onClose={() => setIsReportModalOpen(false)}
          onConfirm={onConfirm}
          id={Number(id)}
        />
      )}
      {isReportModal2Open && (
        <ReportModal2 onClose={() => setIsReportModal2Open(false)} />
      )}
      {/* 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>삭제하시겠습니까?</ModalText>
            <ModalButtonRow>
              <ModalButton onClick={confirmDelete} $primary={false}>
                네
              </ModalButton>
              <ModalButton
                onClick={() => setIsDeleteModalOpen(false)}
                $primary={true}
              >
                아니요
              </ModalButton>
            </ModalButtonRow>
          </ModalBox>
        </ModalOverlay>
      )}
      {/* 삭제 완료 모달 */}
      {isDeletedModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>삭제되었습니다.</ModalText>
            <ModalClose onClick={closeDeletedModal}>×</ModalClose>
          </ModalBox>
        </ModalOverlay>
      )}
      {/* 보관 확인 모달 */}
      {isStoreModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>보관하시겠습니까?</ModalText>
            <ModalButtonRow>
              <ModalButton onClick={confirmStore} $primary={false}>
                네
              </ModalButton>
              <ModalButton
                onClick={() => setIsStoreModalOpen(false)}
                $primary={true}
              >
                아니요
              </ModalButton>
            </ModalButtonRow>
          </ModalBox>
        </ModalOverlay>
      )}
      {/* 보관 완료 모달 */}
      {isStoredModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>보관되었습니다.</ModalText>
            <ModalClose onClick={closeStoredModal}>×</ModalClose>
          </ModalBox>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};

export default CardDetail;

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
`;

// 모달 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px 24px 18px 24px;
  min-width: 220px;
  min-height: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ModalText = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #222;
  margin-bottom: 18px;
`;
const ModalButtonRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
const ModalButton = styled.button<{ $primary: boolean }>`
  flex: 1;
  height: 40px;
  border-radius: 12px;
  border: 1px solid
    ${({ theme, $primary }) =>
      $primary ? theme.colors.primaryColor : theme.colors.gray2};
  background: ${({ theme, $primary }) =>
    $primary ? theme.colors.primaryColor : "#fff"};
  color: ${({ theme, $primary }) => ($primary ? "#fff" : theme.colors.gray5)};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  background: none;
  border: none;
  font-size: 22px;
  color: #888;
  cursor: pointer;
`;
