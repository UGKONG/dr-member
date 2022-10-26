import _React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Form from "./Form";

export default function Login() {
  return (
    <Container>
      <Logo />
      <Form />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 24px 100px;
`;
