import * as S from "./styled";

const MyContact: React.FC = () => {
  const link =
    "https://www.instagram.com/joinusearth_official/profilecard/?igsh=aXlsaGJ4N3V3OGg3";

  const handleLinkClick = () => {
    window.open(link, "_blank");
  };

  return (
    <S.MyContactContainer>
      <S.ContactText>문의는 이곳으로 해주세요!</S.ContactText>
      <S.SNSBox onClick={handleLinkClick}>
        Instagram
        <br />
        <S.Bold>joinusearth_25</S.Bold>
      </S.SNSBox>
    </S.MyContactContainer>
  );
};

export default MyContact;
