import _React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  imgName: string;
  path: string;
}
export default function MainWidget({ imgName, path }: Props) {
  const navigate = useNavigate();

  const img = useMemo(() => {
    let imgFile = require("../../assets/images/" + imgName)?.default;
    if (!imgFile) return "unset";
    return imgFile;
  }, []);

  return (
    <Container imgPath={img}>
      <Button onClick={() => navigate(path)}>결과확인</Button>
    </Container>
  );
}

type ContainerProps = { imgPath: string };
const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 150px;
  border-radius: 6px;
  box-shadow: 0px 2px 10px #00000020;
  background-size: 130% auto;
  background-position: 100% top;
  background-repeat: no-repeat;
  background-image: url(${(x) => x?.imgPath});
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: #fff;
  padding: 6px 12px;
  border-radius: 100px;
  font-size: 12px;
  color: #0267e5;
  font-weight: 500;
  box-shadow: 1px 2px 5px #00000040;
`;
