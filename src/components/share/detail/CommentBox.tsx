import styled from "styled-components";
import * as S from "./detail.styled";
const CommentBox = () => {
  return (
    <Wrapper>
      <S.InputComment placeholder="댓글 쓰기" />
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
