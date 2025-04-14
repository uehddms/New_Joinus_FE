import styled from "styled-components";
import * as S from "./detail.styled";
import send from "@assets/icons/send.svg";
const CommentBox = () => {
  return (
    <Wrapper>
      <S.CommentInputContainer>
        <S.InputComment placeholder="댓글 쓰기" />
        <button style={{ cursor: "pointer" }}>
          <img src={send} alt="보내기" />
        </button>
      </S.CommentInputContainer>
      <S.AddedComment>댓글쓰기</S.AddedComment>
      <S.AddedComment>댓글쓰기- 댓글쓰기</S.AddedComment>
      <S.AddedComment>댓글쓰기</S.AddedComment>
      <S.AddedComment>댓글쓰기</S.AddedComment>
    </Wrapper>
  );
};

export default CommentBox;

const Wrapper = styled.section`
  width: 80%;

  margin: 10px 0;
  /* border: 1px solid black; */
`;
