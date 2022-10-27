import _React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SubWidgetList } from "./subWidgetListMemo";

interface Props {
  data: SubWidgetList;
}
export default function SubWidget({ data }: Props) {
  const navigate = useNavigate();

  const go = (): void => {
    navigate(data?.path);
  };

  return (
    <Container color={data?.color} onClick={go}>
      <Title>{data?.title}</Title>
      <SubTitle>{data?.subTitle}</SubTitle>
      <Icon>
        <data.icon style={{ width: "100%", height: "100%" }} />
      </Icon>
      <Button>이동</Button>
    </Container>
  );
}

type ContainerProps = { color: string };
const Container = styled.section<ContainerProps>`
  width: calc(50% - 5px);
  height: 120px;
  border-radius: 6px;
  box-shadow: 0px 2px 10px #00000020;
  position: relative;
  margin-bottom: 10px;
  padding: 8px;
  opacity: 0.9;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    -25deg,
    ${(x) => x?.color}88,
    ${(x) => x?.color} 50%
  );

  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.8;
  }
`;
const Title = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`;
const SubTitle = styled.h4`
  color: #fff;
  opacity: 0.9;
  font-size: 12px;
  font-weight: 400;
`;
const Button = styled.button`
  position: absolute;
  bottom: 8px;
  left: 8px;
  border: 1px solid #ffffff99;
  background-color: transparent;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 10px;
  color: #fff;
  letter-spacing: 2px;
`;
const Icon = styled.div`
  position: absolute;
  bottom: -10px;
  right: 10px;
  width: 40%;
  opacity: 0.2;
  transform: rotate(-10deg);
`;
