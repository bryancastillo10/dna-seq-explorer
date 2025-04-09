import { useState } from "react";
import { 
		Stack,
		InputLabel,
		Dialog, 
		DialogTitle, 
		DialogContent, 
		DialogActions, 
		Button,
		Select,
		MenuItem,
		FormControl,
		type SelectChangeEvent,
	} from "@mui/material";
import { Tag, File } from "lucide-react";

import FormFieldLabel from "@/components/ui/form/FormFieldLabel";

interface SaveModalProps {
	isOpen: boolean;
	onClose: () => void;
	sampleLabel: string;
}


const SaveModal = ({isOpen, onClose, sampleLabel }: SaveModalProps) => {

  const [selectedFileType, setSelectedFileType] = useState<string>(".pdf");

  const handleSelectChange = (e : SelectChangeEvent) => {
		setSelectedFileType(e.target.value)
  };

  const fileTypeOptions = [".csv", ".pdf",".txt"]

  return (
	<Dialog 
		open={isOpen} 
		onClose={onClose}
		slotProps={{
			paper: {
				sx: { 
					backgroundColor: (theme) => theme.palette.secondary.main,
					color: (theme) => theme.palette.primary.dark,
					padding: 2
			}}
		}}
	>
		<DialogTitle>Save the Analysis Result</DialogTitle>

		<DialogContent sx={{my:2}}>
			<Stack gap={2}>
				<FormFieldLabel
					icon={Tag}
					label={sampleLabel}
				/>

				<FormControl sx={{my: 1, width: "100%"}}>

				<InputLabel sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.4
				}}>
					<File size={16} />
					File Extension
				</InputLabel>

				<Select
					label="Hd File Extension "
					id="fileType"
					value={selectedFileType}
					onChange={handleSelectChange}
					fullWidth
				>
				{fileTypeOptions.map((file) => (
					<MenuItem key={file} value={file}>{file}</MenuItem>
					))}
				</Select>
				</FormControl>
			</Stack>
		</DialogContent>

		<DialogActions>
			<Button variant="outlined" onClick={onClose}>Cancel</Button>
			<Button variant="contained">Save</Button>
		</DialogActions>
	</Dialog>
  )
}

export default SaveModal;
