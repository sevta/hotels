import create from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  primaryColor: string;
  darkMode: boolean;

  setDarkMode: () => void;
  setPrimaryColor: (payload: string) => void;
}

export const useStore = create(
  persist<StoreState>(
    (set, get) => ({
      primaryColor: get()?.primaryColor,
      darkMode: false,

      setDarkMode: () => set({ darkMode: !get().darkMode }),

      setPrimaryColor: (payload: string) =>
        set(() => ({
          primaryColor: payload,
        })),
    }),
    {
      name: "config",
    }
  )
);
