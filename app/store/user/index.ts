import { create } from "zustand";

import { persist, devtools } from "zustand/middleware";

export interface UserState {
  anchorPoint: string;
  saveAnchorPoint: (anchorPoint: string) => void;
}

const useUserStore = create<
  UserState,
  [["zustand/devtools", never], ["zustand/persist", UserState]]
>(
  devtools(
    persist(
      (set, get) => ({
        anchorPoint: "",
        saveAnchorPoint: (anchorPoint: string) => {
          set({ anchorPoint });
        },
      }),
      {
        name: "userStore",
        getStorage: () => sessionStorage,
      }
    )
  )
);

export { useUserStore };
