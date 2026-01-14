import { WindowKey } from "@/store/types/window.store.type";

type NavIconsType = {
  id: number;
  img: string;
};

type NavbarMenuType = {
  id: number;
  name: string;
};

type DockAppType = {
  id: WindowKey;
  name: string;
  icon: string;
  canOpen: boolean;
};

type WELCOME_PAGE_FONT_WEIGHTS_TYPE = {
  title: FontWeightRange;
  subtitle: FontWeightRange;
};

type FontWeightRange = {
  min: number;
  max: number;
  default: number;
};

export type {
  DockAppType,
  NavbarMenuType,
  NavIconsType,
  WELCOME_PAGE_FONT_WEIGHTS_TYPE,
};
