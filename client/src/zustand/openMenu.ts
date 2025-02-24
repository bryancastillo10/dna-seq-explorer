import { create } from "zustand";
import { persist } from "zustand/middleware";

type OpenMenuStore = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

const useOpenMenu = create<OpenMenuStore>()(persist(
    (set, get) => ({
        isMenuOpen: false,
        toggleMenu: () => set({ isMenuOpen: !get().isMenuOpen })
    }),
    {
        name:"toggle-menu"
    }
))

export default useOpenMenu;