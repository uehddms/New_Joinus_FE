import styled from "styled-components";
import * as S from "./modal.styled";
import report from "@assets/icons/report.svg";
import close from "@assets/icons/close.svg";
interface ReportModal2Props {
  onClose: () => void;
}
const ReportModal2 = ({ onClose }: ReportModal2Props) => {
  return (
    <Wrapper>
      <S.ReportModal2Wrapper>
        <img src={close} alt="닫기" onClick={onClose} />
        <S.ReportModal2TextContainer>
          <img src={report} alt="신고" />
          <p>
            신고 내역이 접수되었습니다. <br /> 조인어스 내에서 검토 후
            처리하겠습니다.
          </p>
        </S.ReportModal2TextContainer>
      </S.ReportModal2Wrapper>
    </Wrapper>
  );
};

export default ReportModal2;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
