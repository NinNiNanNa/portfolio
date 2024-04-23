import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const menuState = atom<boolean>({
  key: "menu",
  default: false,
});

export const themeState = atom<string>({
  key: "themeMode",
  default: "dark",
  effects_UNSTABLE: [persistAtom],
});
