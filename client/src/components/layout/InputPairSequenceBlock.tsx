import { Box, Button } from "@mui/material";
import { Tag, Atom, Dna } from "lucide-react";

import {FormControl, 
        InputLabel, 
        TextField,
        Select,
        MenuItem
      } from "@mui/material";

import FormFieldLabel from "@/components/ui/FormFieldLabel";
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
    

        <FormControl sx={[getInputStyle("input"), 
            { display:"flex", 
              flexDirection:"row"}]}>
          <TextField
            id="sampleLabel"
            value=""
            onChange={()=>{}}
            label={<FormFieldLabel label="Sequence 1 Label" icon={Tag} />}
          />
        </FormControl>

       {/* Sequence */}
       <FormControl sx={getInputStyle("textarea")}>
         <TextField  
           id="seq"
           value=""
           onChange={()=>{}}
           label={<FormFieldLabel label="First Sequence" icon={Dna} />}      
           multiline
           rows={8}
         />
       </FormControl>


      <FormControl sx={[getInputStyle("input"), 
            { display:"flex", 
              flexDirection:"row"}]}>
          <TextField
            id="sampleLabel"
            value=""
            onChange={()=>{}}
            label={<FormFieldLabel label="Sequence 2 Label" icon={Tag} />}
          />
        </FormControl>

       {/* Sequence */}
       <FormControl sx={getInputStyle("textarea")}>
         <TextField  
           id="seq"
           value=""
           onChange={()=>{}}
           label={<FormFieldLabel label="Second Sequence" icon={Dna} />}      
           multiline
           rows={8}
         />
       </FormControl>
	</Box>
  )
}

export default InputPairSequenceBlock;
