export type not = null | undefined;
export type a = any;
export type s = string;
export type n = number;
export type b = boolean;
export type v = void;
export type sn = s | number;
export type P<T = v> = Promise<T>;
export type OrNull<T> = T | null;

export interface Menu {
  name: string;
  path: string | null;
  isLine: boolean;
}
export interface User {
  USER_SQ: number;
  USER_NM: string;
}
export interface Notice {
  NOTICE_SQ: number;
  NOTICE_TITLE: string;
  NOTICE_CONTENTS: string;
  NOTICE_DATE: string;
}
export interface ModalButton {
  text: string;
  onClick: () => void;
}
export interface ModalData {
  title: string;
  subTitle?: string;
  jsx: JSX.Element;
  buttons?: Array<ModalButton>;
}
