import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface StoreState {
  theme: string;
  language: string;
  setTheme: (theme: string) => void;
  setLanguage: (language: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      theme: "dark",
      language: "EN",
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "vale-portfolio-settings",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
