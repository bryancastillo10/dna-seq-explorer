import { ToastContext, type ToastContextProps } from "@/context/ToastProvider"
import { useContext } from "react";

export const useToast = (): ToastContextProps => {
	const context = useContext(ToastContext);
	if(!context){
		throw new Error("useToast hook call must be within the Toast Provider");
	}

	return context;
};