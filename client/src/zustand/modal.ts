import { create } from "zustand"

interface ModalState {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	toggleModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	openModal: () => set({isOpen: true}),
	closeModal: () => set({isOpen: false}),
	toggleModal: () => set((state) => ({ isOpen : !state.isOpen }))
}));