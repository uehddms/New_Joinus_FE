import * as S from "./JoinPost.styled";
import Back from "@assets/icons/back.svg";
import Drop from "@assets/icons/Drop.svg";
import { useEffect, useState } from "react";
import { ApiwithToken } from "@api/ApiWithToken";
import { useNavigate } from "react-router";

export const JoinPost = () => {
  const [posts, setPosts] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState<number>(6);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await ApiwithToken.get("join/cards/", {
          params: {
            keywords: selectedKeywords,
            month: selectedMonth,
            only_not_shared: false,
            ordered_by_is_shared: false,
          },
        });
        setPosts(response.data.cardposts);
      } catch (err) {
        console.error("카드 목록 불러오기 실패:", err);
      }
    };

    fetchPosts();
  }, [selectedMonth, selectedKeywords]);

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.Left>
          <S.Back src={Back} />
          <S.Month>
            <span>{selectedMonth}월</span>
          </S.Month>
        </S.Left>
        <S.Keyword>
          <S.Text>키워드 선택</S.Text>
          <S.Drop src={Drop} />
        </S.Keyword>
      </S.HeaderContainer>

      <S.PostWrapper>
        {posts.map((post: any, index: number) => (
          <S.PostContainer
            key={post.id || index}
            onClick={() => navigate(`/detail/${post.id}`)} // ✅ 수정
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
