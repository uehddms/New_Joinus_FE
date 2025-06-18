import styled from "styled-components";
import * as S from "./detail.styled";
import card from "@assets/image/cardContainer.png";
import leaf from "@assets/icons/leaf.png";
import more from "@assets/icons/more-horizontal.svg";
import test from "@assets/icons/test.webp";
import { useEffect, useState, useRef } from "react";
import ReportModal from "@components/modal/ReportModal";
import ReportModal2 from "@components/modal/ReportModal2";
import { ApiwithToken } from "@api/ApiWithToken";
import { shareApi } from "@api/share/ShareApi";

const CardDetail = ({
  data,
  id,
  setData,
}: {
  data: any;
  id: string;
  setData: (data: any) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isReportModal2Open, setIsReportModal2Open] = useState(false);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const handleReportModal = () => {
    setIsReportModalOpen(!isReportModalOpen);
  };

  const handleReport = async () => {
    setIsReportModalOpen(false);
    setIsReportModal2Open(true);
    try {
      await ApiwithToken.post("share/reports/", {
        data: {
          sharecard: 1,
        },
      });
    } catch (e) {
      console.log(e);
    }
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

  // 텍스트 오버플로우 체크
  useEffect(() => {
    if (titleRef.current) {
      // isExpanded가 false일 때만 overflow 체크
      if (!isExpanded) {
        setIsOverflow(
          titleRef.current.scrollWidth > titleRef.current.clientWidth ||
            titleRef.current.scrollHeight > titleRef.current.clientHeight
        );
      } else {
        setIsOverflow(false); // 펼쳤을 때는 버튼 숨김
      }
    }
  }, [data, isExpanded]);

  if (!data) return null;

  return (
    <Wrapper>
      <S.CardContainer>
        <img src={card} alt="카드 프레임" className="card-frame" />
        <img
          src={data.cardpost.large_image_url}
          alt="사용자 추가 이미지"
          className="user-image"
        />

        <S.ContentContainer>
          <S.Container>
            <S.PointContainer>
              <img
                src={data.is_liked ? leaf : test}
                alt="point 로고"
                onClick={handleLike}
              />
              <p>{data.like_count}</p>
            </S.PointContainer>
            <img src={more} alt="신고하기" onClick={handleReportModal} />
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
          onConfirm={handleReport}
        />
      )}
      {isReportModal2Open && (
        <ReportModal2 onClose={() => setIsReportModal2Open(false)} />
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
