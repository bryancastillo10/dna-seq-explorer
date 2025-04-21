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
import type { ExportRequest } from "@/features/fileExport/api/interface";

interface SaveModalProps {
	isOpen: boolean;
	onClose: () => void;
	sampleLabel?: string;
	sampleALabel?:string;
	sampleBLabel?:string;

	fileExport: ExportRequest;
	extensionOptions: string[];
	handleSelectChange: (e: SelectChangeEvent) => void;
}


const SaveModal = ({
	isOpen, 
	onClose, 
	sampleLabel, 
	sampleALabel, 
	sampleBLabel,
	fileExport,
	extensionOptions,
	handleSelectChange
 }: SaveModalProps) => {


  const getModalLabel = () => {
		switch(true){
		case Boolean(sampleALabel):
			return sampleLabel!
		case Boolean(sampleALabel && sampleBLabel):
			return `${sampleALabel} vs. ${sampleBLabel}`
		default:
			return "No Sample Label Provided"
	}
 }

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
					label={getModalLabel()}
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
					value={fileExport.output_format}
					onChange={handleSelectChange}
					fullWidth
				>
				{extensionOptions.map((file) => (
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
