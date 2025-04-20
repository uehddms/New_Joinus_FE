import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import YesNoModal from "../../modal/YesNoModal";

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
      <YesNoModal
        handleYes={handleYes}
        handleNo={handleNo}
        $noColor="primaryColor"
      >
        로그아웃 하시겠습니까?
      </YesNoModal>
    </S.MyLogoutContainer>
  );
};

export default MyLogout;
