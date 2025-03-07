import type { ToastStatus } from "@/context/ToastProvider";
import { Snackbar, Alert, type SnackbarCloseReason } from "@mui/material";

interface ToastProps {
	open: boolean;
	message: string;
	onClose: (_event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => void;
	status: ToastStatus;
}


const Toast = (props:ToastProps) => {
  const { open, onClose, message, status } = props;
  return (
	 <Snackbar 
		open={open} 
		autoHideDuration={4000} 
		onClose={onClose}
		anchorOrigin={{vertical: "top", horizontal:"center"}}
	 >
		<Alert
			onClose={onClose}
			severity={status}
			variant="filled"
			sx={{width: "100%"}}
		>
			{message}
		</Alert>
	</Snackbar>
  )
}

export default Toast;
