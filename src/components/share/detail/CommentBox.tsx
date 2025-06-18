import styled from "styled-components";
import * as S from "./detail.styled";
import send from "@assets/icons/send.svg";
import { useEffect, useState } from "react";
import { ApiwithToken } from "@api/ApiWithToken";
interface CommentData {
  id: number;
  comment_info: {
    user_id: number;
    username: string;
  };
  content: string;
  created_at: string;
}
const CommentBox = ({ id }: { id: string }) => {
  const [commentData, setCommentData] = useState<CommentData[]>([]);
  const [comment, setComment] = useState("");
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
        <S.AddedComment key={comment.id}>{comment.content}</S.AddedComment>
      ))}
    </Wrapper>
  );
};

export default CommentBox;

const Wrapper = styled.section`
  width: 80%;

  margin: 10px 0;
  /* border: 1px solid black; */
`;
