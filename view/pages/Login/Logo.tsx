import _React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <Container>
      <MainText>Dr. Care Union</MainText>
      <SubText>Health Care Service</SubText>
    </Container>
  );
}

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const MainText = styled.span`
  color: #186b3d;
  font-size: 40px;
  letter-spacing: -1.5px;
`;
const SubText = styled.span`
  font-size: 20px;
  letter-spacing: 1px;
  color: #888888;
`;
