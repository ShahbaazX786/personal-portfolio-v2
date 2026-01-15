import { locations } from "@/lib/constants/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { LocationStore } from "./types/location.store.type";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        if (location) state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);

export default useLocationStore;
