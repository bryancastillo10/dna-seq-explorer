import { Button, FormControl, TextField } from "@mui/material";
import { Tag } from "lucide-react";

import FormFieldLabel from "@/components/ui/form/FormFieldLabel";
import { getInputStyle } from "@/utils/getInputStyle";

interface SequenceLabelProps {
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	layout?: "input" | "inputWithBtn";
}

const SequenceLabel = ({ 
	id, 
	value, 
	onChange, 
	label ="Sequence Label",
	layout = "input"
	}: SequenceLabelProps) => {

	const withBtn = layout === "inputWithBtn";
  return (
	<FormControl sx={getInputStyle(layout)}>
        <TextField
          id={id}
          value={value}
          onChange={onChange}
          label={<FormFieldLabel label={label} icon={Tag} />}
        />
		{withBtn && (
			<Button 
				onClick={()=>{}}
				variant="contained"
			>
				Load
			</Button>
		)}
    </FormControl>
  )
}

export default SequenceLabel;
