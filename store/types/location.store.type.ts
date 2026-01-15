import { locations } from "@/lib/constants/constants";

export type LocationKey = keyof typeof locations;
export type Location = (typeof locations)[LocationKey];

export interface LocationStore {
  activeLocation: Location;
  setActiveLocation: (location?: Location | null) => void;
  resetActiveLocation: () => void;
}
