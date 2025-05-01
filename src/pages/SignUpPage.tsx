import styled from "styled-components";
import LogoSection from "@components/login/LogoSection";
import { InputSection } from "@components/signup/InputSection";

export const SignUpPage = () => {
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
