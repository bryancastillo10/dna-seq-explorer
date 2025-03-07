import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { type SelectChangeEvent } from "@mui/material";
import { Atom } from "lucide-react";

import { getInputStyle } from "@/utils/getInputStyle";

interface BioMoleSelectProps {
	value: string;
	feature?: "basic" | "advanced" | "pairwise";
	onChange: (e: SelectChangeEvent) => void;
}

const BioMoleSelect = ({ 
	value, 
	feature = "basic", 
	onChange
	}:BioMoleSelectProps) => {
  const moleculeOptions = ["DNA", "RNA", "Protein"];
  const noProteinOptions = moleculeOptions.filter(opt => opt !== "Protein");
  
  const selectOptions = feature === "advanced" 
		? noProteinOptions 
		: moleculeOptions;

  return (
    <FormControl sx={getInputStyle("select")}>
      <InputLabel sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.4
      }}>
        <Atom size={16} />
        Biomolecule Type
      </InputLabel>
      <Select
          label="Hd Biomolecule Type"
          id="seqType"
          value={value}
          onChange={onChange}
          fullWidth
        >
        {selectOptions.map(mole => (
          <MenuItem key={mole} value={mole}>{mole}</MenuItem>))}
      </Select>
    </FormControl>
  )
}

export default BioMoleSelect;
