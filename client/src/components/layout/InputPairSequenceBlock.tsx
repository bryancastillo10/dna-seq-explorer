import { Box, Button } from "@mui/material";
import { Tag, Atom } from "lucide-react";

import {FormControl, 
        InputLabel, 
        TextField,
        Select,
        MenuItem
      } from "@mui/material";

import FormFieldLabel from "@/components/ui/form/FormFieldLabel";
import SequenceInput from "@/components/ui/form/SequenceInput";
import { getInputStyle } from "@/utils/getInputStyle";

const InputPairSequenceBlock = () => {
  const moleculeOptions = ["DNA", "RNA", "Protein"]

  return (
	<Box
          component="form"
          onSubmit={() =>{}}
          sx={{
            display:"flex",
            flexDirection:"column",
            gap: 2,
            width: {xs:"100%", md:"50%"},
          }}
    >
     {/* Biomolecule Type */}
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
              value=""
              onChange={()=>{}}
              fullWidth
            >
            {moleculeOptions.map(mole => (
              <MenuItem key={mole} value={mole}>{mole}</MenuItem>))}
          </Select>
        </FormControl>
    

        <FormControl sx={{display:"flex", flexDirection:"row", gap: 2}}>
          <TextField
            id="seqALabel"
            value=""
            onChange={()=>{}}
            label={<FormFieldLabel label="Sequence 1 Label" icon={Tag} />}
          />
          <Button variant="outlined">Load</Button>
        </FormControl>

       {/* Sequence A */}
        <SequenceInput
            id="seqA"
            value=""
            onChange={()=>{}}
            label="Sequence 1"
        />


      <FormControl sx={[getInputStyle("input"), 
            { display:"flex", 
              flexDirection:"row"}]}>
          <TextField
            id="seqBLabel"
            value=""
            onChange={()=>{}}
            label={<FormFieldLabel label="Sequence 2 Label" icon={Tag} />}
          />
        </FormControl>

       {/* Sequence */}
        <SequenceInput
            id="seqB"
            value=""
            onChange={()=>{}}
            label="Sequence 2"
        />
       
	</Box>
  )
}

export default InputPairSequenceBlock;
