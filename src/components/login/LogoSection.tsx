import logo from "../../assets/icons/mainLogo.png";
import * as S from "./Login.styled";

const LogoSection = () => {
  return (
    <S.ImgSection>
      <img src={logo} alt="조인어스 로고"></img>
    </S.ImgSection>
  );
};

export default LogoSection;
