import _React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsCheck2 } from "react-icons/bs";
import { useAxios } from "../../../lib/utils";
import { useDispatch } from "react-redux";
import { User } from "../../../types";

interface CurrentData {
  id: string;
  pw: string;
  isAuto: boolean;
}

export default function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState<CurrentData>({
    id: "",
    pw: "",
    isAuto: false,
  });

  const inputChange = (e: ChangeEvent<HTMLInputElement>, key: string): void => {
    setCurrentData({ ...currentData, [key]: e?.target?.value });
  };

  const checkChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentData({ ...currentData, isAuto: e?.target?.checked });
  };

  const login = (): void => {
    const { id, pw, isAuto } = currentData;
    if (!id) return;
    if (!pw) return;

    console.log(currentData);
    const user: User = {
      USER_SQ: 1,
      USER_NM: "홍길동",
    };
    dispatch({ type: "loginUser", payload: user });
    navigate("/");
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="연락처"
        onChange={(e) => inputChange(e, "id")}
      />
      <Input
        type="password"
        placeholder="패스워드"
        onChange={(e) => inputChange(e, "pw")}
      />
      <AutoLoginBox>
        <Checkbox checked={currentData?.isAuto} onChange={checkChange} />
        <CheckboxLabel>
          <CheckIcon />
        </CheckboxLabel>
        <Label isChecked={currentData?.isAuto}>로그인 상태 유지</Label>
      </AutoLoginBox>
      <ButtonContainer>
        <LoginBtb onClick={login}>로그인</LoginBtb>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;
const Input = styled.input`
  margin-bottom: 10px;
  font-size: 15px;
`;
const AutoLoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
  id: "autoLogin",
}))`
  display: none;
  &:checked + label {
    background-color: #2b8353;
    border: none;
  }
`;
const CheckboxLabel = styled.label.attrs(() => ({
  htmlFor: "autoLogin",
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid #bbb;
  margin-right: 8px;
`;
type LabelProps = { isChecked: boolean };
const Label = styled.label.attrs(() => ({
  htmlFor: "autoLogin",
}))`
  font-size: 14px;
  font-weight: ${(x: LabelProps) => (x?.isChecked ? "500" : "400")};
  color: ${(x: LabelProps) => (x?.isChecked ? "#444" : "#666")};
  user-select: none;
`;
const CheckIcon = styled(BsCheck2).attrs(() => ({}))`
  color: #fff;
`;
const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;
const LoginBtb = styled.button`
  font-size: 14px;
  letter-spacing: 1px;
  width: 100%;
  height: 42px;
  background-color: #207a48;
  border-radius: 100px;
  color: #fff;
`;
