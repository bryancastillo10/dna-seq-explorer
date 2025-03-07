import { createContext, useState } from "react";
import { type SnackbarCloseReason } from "@mui/material";
import Toast from "@/components/common/Toast";

export type ToastStatus = "success" | "error" | "warning" | "info";

export interface ToastContextProps {
	showToast: (message: string, severity?: ToastStatus) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({children}: {children: React.ReactNode}) => {
	const [openToast, setOpenToast] = useState<boolean>(false);
	const [ message, setMessage ] = useState<string>("");
	const [ status, setStatus ] = useState<ToastStatus>("success");

	const showToast = (message: string, status: ToastStatus = "success") => {
			setMessage(message);
			setStatus(status);
			setOpenToast(true);
	};

	const handleCloseToast = (
		_event?: React.SyntheticEvent | Event,
		reason?: SnackbarCloseReason
	) => {
		if(reason === "clickaway") {
			return;
		}
		setOpenToast(false);
	};

	return (
		<ToastContext.Provider value={{showToast}}>
			{children}
			<Toast
				open={openToast}
				onClose={handleCloseToast}
				status={status}
				message={message}
			/>
		</ToastContext.Provider>
	)
};