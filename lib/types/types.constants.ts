import { WindowKey } from "@/store/types/window.store.type";

type NavIconsType = {
  id: string;
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

type LocationType = {
  id: string;
  type: string;
  name: string;
  icon: string;
  kind: string;
  children: LocationChildrenType[];
};

type LocationChildrenType = {
  id: string;
  name: string;
  icon: string;
  kind: string;
  position: string;
  windowPosition: string;
  children: any;
};

export type {
  DockAppType,
  LocationChildrenType,
  LocationType,
  NavbarMenuType,
  NavIconsType,
};
