import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import MyModal from "../../modal/YesNoModal";

const MyLogout = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate("/");
  };

  const handleNo = () => {
    navigate("/us");
  };
  return (
    <S.MyLogoutContainer>
      <MyModal
        handleYes={handleYes}
        handleNo={handleNo}
        $noColor="primaryColor"
      >
        로그아웃 하시겠습니까?
      </MyModal>
    </S.MyLogoutContainer>
  );
};

export default MyLogout;
