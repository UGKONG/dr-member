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
  id: number;
  name: string;
  path: string;
}
export interface User {
  USER_SQ: number;
  USER_NM: string;
}
