import { WINDOW_CONFIG } from "@/lib/constants/constants";

export type WindowKey = keyof typeof WINDOW_CONFIG;

export interface WindowState<T = unknown> {
  isOpen: boolean;
  zIndex: number;
  data: T | null;
}

export type WindowsMap = {
  [K in WindowKey]: WindowState;
};

export interface WindowStore {
  windows: WindowsMap;
  nextZIndex: number;

  openWindow: <T = unknown>(windowKey: WindowKey, data?: T | null) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}
