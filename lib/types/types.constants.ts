import { WindowKey } from "@/store/types/window.store.type";

type NavIconsType = {
  id: number;
  img: string;
};

type NavbarMenuType = {
  id: number;
  name: string;
  type: string;
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

type LocationType = {
  id: number;
  type: string;
  name: string;
  icon: string;
  kind: string;
  children: LocationChildrenType[];
};

type LocationChildrenType = {
  id: number;
  name: string;
  icon: string;
  kind: string;
  position: string;
  windowPosition: string;
  children: any;
};

export type {
  DockAppType,
  NavbarMenuType,
  NavIconsType,
  LocationType,
  LocationChildrenType,
  WELCOME_PAGE_FONT_WEIGHTS_TYPE,
};
