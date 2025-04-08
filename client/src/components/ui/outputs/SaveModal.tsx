import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

interface SaveModalProps {
	isOpen: boolean;
	onClose: () => void;
}


const SaveModal = ({isOpen, onClose}: SaveModalProps) => {
  return (
	<Dialog 
		open={isOpen} 
		onClose={onClose}
		slotProps={{
			paper: {
				sx: { 
					backgroundColor: (theme) => theme.palette.secondary.main,
					color: (theme) => theme.palette.primary.dark
			}}
		}}
	>
		<DialogTitle>Save the Analysis Result</DialogTitle>

		<DialogContent sx={{my:2}}>
			<TextField
				label="Save Directory"
				sx={{mt:2}}
				
			/>
		</DialogContent>

		<DialogActions>
			<Button variant="outlined" onClick={onClose}>Cancel</Button>
			<Button variant="contained">Save .pdf</Button>
		</DialogActions>
	</Dialog>
  )
}

export default SaveModal;
