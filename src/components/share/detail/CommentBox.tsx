import styled from "styled-components";
import * as S from "./detail.styled";
import send from "@assets/icons/send.svg";
import more from "@assets/icons/more-horizontal.svg";
import { useEffect, useState } from "react";
import { ApiwithToken } from "@api/ApiWithToken";
interface CommentData {
  id: number;
  commenter_info: {
    user_id: number;
    username: string;
    is_owner: boolean;
  };
  content: string;
  created_at: string;
}
const CommentBox = ({ id }: { id: string }) => {
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [comment, setComment] = useState("");
  const [isMoreOpen, setIsMoreOpen] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<number | null>(
    null
  );
  // 댓글 데이터 불러오기
  useEffect(() => {
    const fetchCommentData = async () => {
      const response = await ApiwithToken.get(`share/comments/`, {
        params: {
          sharedcard: id,
        },
      });
      console.log(response.data);
      setCommentData(response.data.comments);
    };
    fetchCommentData();
  }, []);

  const handleComment = async (comment: string) => {
    try {
      await ApiwithToken.post(`share/comments/`, {
        sharedcard: id,
        content: comment,
      });
      setComment("");
      // 댓글 작성 후 댓글 목록 다시 불러오기
      const response = await ApiwithToken.get(`share/comments/`, {
        params: {
          sharedcard: id,
        },
      });
      setCommentData(response.data.comments);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = (commentId: number) => {
    setSelectedCommentId(commentId);
    setIsDeleteModalOpen(true);
    setIsMoreOpen(null);
  };

  const confirmDelete = async () => {
    if (selectedCommentId) {
      try {
        await ApiwithToken.delete(`share/comments/${selectedCommentId}/`);
        const response = await ApiwithToken.get(`share/comments/`, {
          params: {
            sharedcard: id,
          },
        });
        setCommentData(response.data.comments);
        setIsDeleteModalOpen(false);
        setSelectedCommentId(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleMore = (commentId: number) => {
    if (isMoreOpen === commentId) {
      setIsMoreOpen(null);
    } else {
      setIsMoreOpen(commentId);
    }
  };

  return (
    <Wrapper>
      <S.CommentInputContainer>
        <S.InputComment
          placeholder="댓글 쓰기"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          style={{ cursor: "pointer" }}
          onClick={() => handleComment(comment)}
        >
          <img src={send} alt="보내기" />
        </button>
      </S.CommentInputContainer>
      {commentData.map((comment) => (
        <div
          key={comment.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <S.AddedComment>
            <p>{comment.content}</p>
            <div>
              {comment.commenter_info.is_owner && (
                <img
                  src={more}
                  alt="더보기"
                  onClick={() => handleMore(comment.id)}
                />
              )}
            </div>
          </S.AddedComment>
          {isMoreOpen === comment.id && comment.commenter_info.is_owner && (
            <S.MoreMenu>
              <button onClick={() => handleDelete(comment.id)}>삭제</button>
            </S.MoreMenu>
          )}
        </div>
      ))}
      {/* 댓글 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>댓글을 삭제하시겠습니까?</ModalText>
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
    </Wrapper>
  );
};

export default CommentBox;

const Wrapper = styled.section`
  width: 80%;

  margin: 10px 0;
  /* border: 1px solid black; */
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
