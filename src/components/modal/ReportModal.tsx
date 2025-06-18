import styled from "styled-components";
import * as S from "./modal.styled";
import report from "@assets/icons/report.svg";
import { ApiwithToken } from "@api/ApiWithToken";

interface ReportModalProps {
  onClose: () => void;
  onConfirm: () => void;
  id: number;
}

const ReportModal = ({ onClose, onConfirm, id }: ReportModalProps) => {
  const handleReport = async () => {
    try {
      await ApiwithToken.post(`share/reports/`, {
        sharedcard: id,
      });
      onConfirm();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Wrapper>
      <S.ReportModalWrapper>
        <S.ReportModalTextContainer>
          <img src={report} alt="신고" />
          <p>해당 게시물을 신고하시겠습니까?</p>
        </S.ReportModalTextContainer>
        <div
          style={{
            display: "flex",
            gap: "10px",
            height: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <S.ReportModalButton onClick={handleReport}>네</S.ReportModalButton>
          <S.ReportModalButton bgcolor="primaryColor" onClick={onClose}>
            아니오
          </S.ReportModalButton>
        </div>
      </S.ReportModalWrapper>
    </Wrapper>
  );
};
export default ReportModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
