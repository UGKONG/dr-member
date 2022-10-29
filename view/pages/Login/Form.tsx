import _React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsCheck2 } from "react-icons/bs";
import { useAxios } from "../../../lib/utils";
import { useDispatch } from "react-redux";
import { User } from "../../../types";
import sha256 from "sha256";

interface CurrentData {
  os: string;
  uuid: string;
  id: string;
  pw: string;
  isAuto: boolean;
}

export default function Form(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState<CurrentData>({
    os: "",
    uuid: "",
    id: "",
    pw: "",
    isAuto: false,
  });

  // 아이디, 패스워드 변경
  const inputChange = (e: ChangeEvent<HTMLInputElement>, key: string): void => {
    setCurrentData({ ...currentData, [key]: e?.target?.value });
  };

  // 로그인 저장 체크 변경
  const checkChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentData({ ...currentData, isAuto: e?.target?.checked });
  };

  // 로그인
  const login = (): void => {
    const data = {
      task: "staff_login",
      uID: currentData?.id,
      uPW: currentData?.pw,
      pwd_encrypted: sha256(currentData?.pw),
      LOGINTYPE: 1,
    };
    const user: User = {
      USER_SQ: 1,
      USER_NM: "홍길동",
    };

    // useAxios.post("", data).then(({ data }) => {
    //   let result = data?.split("|")[1];
    //   if (result !== "index") return alert("로그인에 실패하였습니다.");
    //   console.log(data);

    dispatch({ type: "loginUser", payload: user });
    navigate("/");
    // });
  };

  // 로그인 유효성 검사
  const loginValidate = (): void => {
    console.log(currentData);
    const { id, pw, isAuto } = currentData;
    if (!id) return;
    if (!pw) return;

    login();
  };

  return (
    <Container>
      <input
        type="text"
        id="os"
        onChange={(e) => inputChange(e, "os")}
        hidden
      />
      <input
        type="text"
        id="uuid"
        onChange={(e) => inputChange(e, "uuid")}
        hidden
      />
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
        <LoginBtn onClick={loginValidate}>로그인</LoginBtn>
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
const LoginBtn = styled.button`
  font-size: 14px;
  letter-spacing: 1px;
  width: 100%;
  height: 42px;
  background-color: #207a48;
  border-radius: 100px;
  color: #fff;
`;
