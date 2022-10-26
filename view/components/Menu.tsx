import _React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StoreState } from "../../lib/store";
import { Menu } from "../../types";

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMenu = useSelector((x: StoreState) => x?.isMenu);
  const [menuList, setMenuList] = useState<Menu[]>([
    { id: 1, name: "홈", path: "/" },
    { id: 2, name: "수업", path: "/class" },
    { id: 3, name: "내예약", path: "/reservation" },
    { id: 4, name: "내건강", path: "/health" },
    { id: 5, name: "내이용권", path: "/voucher" },
    { id: 6, name: "내정보", path: "/info" },
    { id: 7, name: "운동플랜", path: "/plan" },
    { id: 8, name: "고객센터", path: "/help" },
    { id: 9, name: "로그아웃", path: "/logout" },
  ]);

  const menuOff = (): void => {
    dispatch({ type: "isMenu", payload: false });
  };

  const menuClick = (path: string): void => {
    navigate(path);
    menuOff();
  };

  return (
    <>
      {isMenu && <Background onClick={menuOff} />}
      <Container isMenu={isMenu}>
        <MenuBtnContainer>
          {menuList?.map((item) => (
            <MenuBtn key={item?.id} onClick={() => menuClick(item?.path)}>
              {item?.name}
            </MenuBtn>
          ))}
        </MenuBtnContainer>
      </Container>
    </>
  );
}

const Background = styled.div`
  background-color: #00000000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
type ContainerProps = { isMenu: boolean };
const Container = styled.section`
  position: fixed;
  top: 0;
  left: ${(x: ContainerProps) => (x?.isMenu ? 0 : -70)}%;
  width: 70%;
  height: 100%;
  transition: 0.3s;
  background-color: #fff;
  box-shadow: 10px 0 10px 10000px
    ${(x: ContainerProps) => (x?.isMenu ? "#00000040" : "#00000000")};
`;
const MenuBtnContainer = styled.ul``;
const MenuBtn = styled.li``;
