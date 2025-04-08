import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface SaveModalProps {
	isOpen: boolean;
	onClose: () => void;
}


const SaveModal = ({isOpen, onClose}: SaveModalProps) => {
  return (
	<Dialog open={isOpen} onClose={onClose} >
		<DialogTitle>Save the Result</DialogTitle>

		<DialogContent>
			Some Content Here
		</DialogContent>

		<DialogActions>
			<Button variant="outlined" onClick={onClose}>Cancel</Button>
			<Button variant="contained">Save</Button>
		</DialogActions>
	</Dialog>
  )
}

export default SaveModal;
