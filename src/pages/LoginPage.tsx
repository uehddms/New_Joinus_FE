import styled from "styled-components";
import LogoSection from "@components/login/LogoSection";
import { InputSection } from "@components/login/InputSection";
import { ButtonSection } from "@components/login/ButtonSection";

export const LoginPage = () => {
  return (
    <Wrapper>
      <LogoSection />
      <InputSection />
      <ButtonSection />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80vh;
`;
