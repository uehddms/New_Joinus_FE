import { ApiwithToken } from "@api/ApiWithToken";
import { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MakeSharePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState<any>(null);
  const [isEdit, setIsEdit] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fetch = async () => {
    try {
      const response = await ApiwithToken.get(`join/cards/${id}/`);

      setData(response.data);
    } catch (error) {
      console.log("API error:", error);
    }
  };

  useEffect(() => {
    if (location.pathname.startsWith("/share/edit/")) {
      setIsEdit(true);
    }
    fetch();
  }, [id, location.pathname]);

  const handleUpload = async () => {
    const textarea = textareaRef.current;
    try {
      if (isEdit) {
        await ApiwithToken.put(`share/sharedcards/${id}/`, {
          description: textarea?.value,
        });
      } else {
        await ApiwithToken.post("share/sharedcards/", {
          cardpost_id: id,
          description: textarea?.value,
        });
      }
    } catch (error) {
      console.log("API error:", error);
    }
    navigate("/share");
  };

  return (
    <>
      <Wrapper>
        {data && (
          <img
            src={isEdit ? data.cardpost.large_image_url : data.large_image_url}
            alt="사용자가 추가한 이미지"
          />
        )}
      </Wrapper>
      <Textarea placeholder="내용을 입력해주세요." ref={textareaRef} />
      <Button onClick={handleUpload}>공유에 업로드 하기</Button>
    </>
  );
};

export default MakeSharePage;

const Wrapper = styled.div`
  width: 90%;
  height: fit-content;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 16px;
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
  }
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 20vh;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 16px;
  padding: 1rem;
  font-size: 16px;
  font-family: Pretendard;
  resize: none;
  margin-top: 1rem;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

const Button = styled.button`
  width: 90%;
  height: 70px;
  border-radius: 24px;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.gray1};
  font-family: Pretendard;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;
