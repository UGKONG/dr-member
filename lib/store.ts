import { createStore } from "redux";
import { OrNull, User, ModalData } from "../types";

export interface StoreDispatch {
  type: string;
  payload: any;
}
export interface StoreState {
  loginUser: OrNull<User>;
  isMenu: boolean;
  modalData: null | ModalData;
}

const currentState: StoreState = {
  // loginUser: null,
  loginUser: { USER_SQ: 1, USER_NM: "홍길동" },
  isMenu: false,
  modalData: null,
};

const reducer = (
  state: StoreState = currentState,
  action: StoreDispatch
): StoreState => {
  return {
    ...state,
    [action?.type]: action?.payload,
  };
};

const store = createStore(reducer);
export default store;
