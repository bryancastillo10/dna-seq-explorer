import { FormControl, TextField } from "@mui/material";
import { Dna } from "lucide-react";

import FormFieldLabel from "@/components/ui/FormFieldLabel";
import { getInputStyle } from "@/utils/getInputStyle";

interface SequenceInputProps {
	id: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
}

const SequenceInput = ({
	id, 
	value,
	onChange, 
	label = "Sequence"
	}: SequenceInputProps) => {
  return (
	 <FormControl sx={getInputStyle("textarea")}>
            <TextField  
              id={id}
              value={value}
              onChange={onChange}
              label={<FormFieldLabel label={label} icon={Dna} />}      
              multiline
              rows={8}
            />
     </FormControl>
  )
}

export default SequenceInput;
