import styled from "styled-components";
import LogoSection from "@components/login/LogoSection";
import { InputSection } from "@components/login/InputSection";

export const LoginPage = () => {
  return (
    <Wrapper>
      <LogoSection />
      <InputSection />
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
