import _React, { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import { MainTitle } from "../Main";
import PartItem from "./PartItem";
import partListMemo from "./partListMemo";

export default function Plan() {
  const partList = partListMemo();

  return (
    <Container>
      <Description>※ 측정 결과로 증상을 나타냅니다.</Description>
      <MainTitle>증상 리스트</MainTitle>
      <PartList>
        {partList?.map((item) => (
          <PartItem key={item?.id} data={item} />
        ))}
      </PartList>
    </Container>
  );
}

const Description = styled.p`
  font-size: 12px;
  color: #999999;
  margin-bottom: 10px;
`;
const PartList = styled.ul``;
