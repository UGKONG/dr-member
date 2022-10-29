import _React, { useMemo } from "react";
import styled from "styled-components";
import partButtonMemo from "./partButtonMemo";

interface Props {
  data: any;
}
export default function PartItem({ data }: Props): JSX.Element {
  const buttonList = partButtonMemo();
  const id = data?.id;
  const title = data?.title ?? "";

  const bgImage = useMemo(() => {
    let img = require("../../assets/images/plan/" + id + ".png");
    return img?.default;
  }, []);

  return (
    <Container img={bgImage}>
      <Title>{title}</Title>
      <Buttons>
        {buttonList?.map((item) => (
          <Button key={item?.id}>{item?.title}</Button>
        ))}
      </Buttons>
    </Container>
  );
}

type BackgroundImageProps = { img: any };
const Container = styled.li<BackgroundImageProps>`
  position: relative;
  margin-bottom: 14px;
  color: #333;
  display: flex;
  flex-flow: column;
  height: 200px;
  border-radius: 6px;
  box-shadow: 0 2px 5px #00000040;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  background-image: url(${(x) => x?.img});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000030;
    background-image: linear-gradient(90deg, #000000cc, transparent, #00000050);
  }
`;
const Title = styled.h3`
  padding: 14px;
  font-size: 18px;
  font-weight: 400;
  flex: 1;
  color: #fff;
  z-index: 2;
`;
const Buttons = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  z-index: 2;
`;
const Button = styled.button`
  border-right: 1px solid #dddddd;
  background-color: #efefef;
  font-size: 13px;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  letter-spacing: 1px;
`;
