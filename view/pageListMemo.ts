import _React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../lib/store";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Schedule from "./pages/Schedule";
import Reservation from "./pages/Reservation";
import MyReservation from "./pages/MyReservation";
import Health from "./pages/Health";
import Voucher from "./pages/Voucher";
import Plan from "./pages/Plan";
import Notice from "./pages/Notice";
import Help from "./pages/Help";
import Checkin from "./pages/Checkin";
import UseVoucher from "./pages/UseVoucher";
import MyInfo from "./pages/MyInfo";
import CenterInfo from "./pages/CenterInfo";
import Test from "./pages/Test";

export type PagePathList =
  | "/"
  | "/login"
  | "/class"
  | "/myReservation"
  | "/reservation"
  | "/health"
  | "/voucher"
  | "/plan"
  | "/notice"
  | "/help"
  | "/checkin"
  | "/useVoucher"
  | "/myInfo"
  | "/centerInfo"
  | "/test";

export interface PageList {
  path: PagePathList;
  component: () => JSX.Element;
}
export default function pageListMemo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((x: StoreState) => x?.loginUser);

  const memo = useMemo<Array<PageList>>(() => {
    if (!loginUser) {
      dispatch({ type: "isMenu", payload: false });
      dispatch({ type: "loginUser", payload: null });
      navigate("/login");
      return [{ path: "/login", component: Login }];
    }

    return [
      { path: "/", component: Main },
      { path: "/class", component: Schedule },
      { path: "/myReservation", component: MyReservation },
      { path: "/reservation", component: Reservation },
      { path: "/health", component: Health },
      { path: "/voucher", component: Voucher },
      { path: "/plan", component: Plan },
      { path: "/notice", component: Notice },
      { path: "/help", component: Help },
      { path: "/checkin", component: Checkin },
      { path: "/useVoucher", component: UseVoucher },
      { path: "/myInfo", component: MyInfo },
      { path: "/centerInfo", component: CenterInfo },
      { path: "/test", component: Test },
      { path: "/login", component: Login },
    ];
  }, [loginUser]);

  return memo;
}
