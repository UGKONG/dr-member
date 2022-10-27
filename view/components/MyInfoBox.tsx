import _React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StoreState } from "../../lib/store";
import { FaUser } from "react-icons/fa";

export default function MyInfoBox() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((x: StoreState) => x?.loginUser);

  const userName = useMemo(() => {
    let name = user?.USER_NM;
    let result = "-";
    if (name) result = name + " 회원";
    return result;
  }, [user?.USER_NM]);

  const myInfoGo = (): void => {
    navigate("/myInfo");
    dispatch({ type: "isMenu", payload: false });
  };

  return (
    <Container onClick={myInfoGo}>
      <UserProfile />
      <Info>{userName}</Info>
    </Container>
  );
}

const Container = styled.section`
  padding: 10px;
  border: 1px solid #eee;
  background-color: #32965f;
  border-radius: 6px;
  margin: 10px;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #2a8a55;
  }
  &:active {
    opacity: 0.8;
  }
`;
const UserProfile = styled(FaUser)`
  color: #fff;
  opacity: 0.9;
  font-size: 20px;
  border: 1px solid #ddd;
  border-radius: 100px;
  padding: 5px;
  min-width: 34px;
  min-height: 34px;
  max-width: 34px;
  max-height: 34px;
`;
const Info = styled.div`
  flex: 1;
  margin-left: 15px;
  color: #fff;
  font-size: 15px;
  font-weight: 300;
`;
