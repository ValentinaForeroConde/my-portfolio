import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      theme: "dark",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "vale-portfolio-settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
