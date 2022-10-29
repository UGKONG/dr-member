import _React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../../lib/store";

export default function Modal(): JSX.Element {
  const dispatch = useDispatch();
  const modalData = useSelector((x: StoreState) => x?.modalData);
  if (!modalData) return <></>;

  const modalOff = (): void => {
    dispatch({ type: "modalData", payload: null });
  };

  return (
    <>
      <Background onClick={modalOff} />
      <Container>
        <Title>
          {modalData?.title}
          <SubTitle>{modalData?.subTitle ?? ""}</SubTitle>
        </Title>
        <Contents>{modalData?.jsx}</Contents>
        {modalData?.buttons?.map((item, idx) => (
          <Btn key={idx} onClick={item?.onClick}>
            {item?.text}
          </Btn>
        ))}
        <Btn onClick={modalOff}>닫 기</Btn>
      </Container>
    </>
  );
}

const Background = styled.section`
  background-color: #00000020;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const Container = styled.section`
  position: fixed;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 16px 16px;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 38%) 2px 3px 5px;
  z-index: 50001;
  min-width: 310px;
  max-width: 400px;
  width: 28%;
  background-color: rgb(254, 254, 254);
  align-items: flex-start !important;
`;
const Title = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: #1f6f43;
  padding: 5px 0px;
  margin-bottom: 20px;
  position: relative;
  user-select: none;
`;
const SubTitle = styled.small`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: 400;
  color: rgb(187, 187, 187);
  user-select: none;
`;
const Contents = styled.div`
  width: 100%;
  min-height: 20vh;
  max-height: 50vh;
  overflow: auto;
  margin-bottom: 10px;
  position: relative;
  font-size: 14px;
  color: #555;
`;
const Btn = styled.button`
  width: 100%;
  height: 32px;
  color: #fff;
  background-color: #2e8b58;
  border-radius: 3px;
  user-select: none;
  margin-top: 5px;
`;
