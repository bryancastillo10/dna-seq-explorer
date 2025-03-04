import {
  Box,
  FormControl,
  Select,
  TextField,
  InputLabel,
  MenuItem,
  Button
} from "@mui/material";
import { Tag, Atom, Dna  } from "lucide-react";
import FormFieldLabel from "../ui/FormFieldLabel";
const InputSingleSequenceBlock = () => {
  const moleculeOptions = ["DNA", "RNA", "Protein"];

  return (
        <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            gap: 2,
            width: {xs:"100%", md:"50%"},
          }}
        >
          <FormControl sx={{width: {xs: "100%", md:"50%"}, my: 1}}>
              <TextField
                id="seqLabel"
                label={<FormFieldLabel label="Sample Label" icon={Tag} />}
              />
          </FormControl>
          <FormControl sx={{width: {xs: "100%", md:"50%"} , my: 1}}>
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
                value="DNA"
                onChange={() => { }}
                fullWidth
              >
              {moleculeOptions.map(mole => (
                <MenuItem key={mole} value={mole}>{mole}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl sx={{width: {xs: "100%", md:"90%"}, my: 1}}>
            <TextField  
              id="seq"
              label={<FormFieldLabel label="Sequence" icon={Dna} />}      
              multiline
              rows={8}
            />
          </FormControl>
          <Box sx={{ flexWrap:"wrap", display:"flex", gap: 8}}>
            <Button variant="outlined">Cancel</Button>
            <Button  variant="outlined">Clear Input</Button>
            <Button  variant="contained">Submit</Button>
          </Box>
      </Box>
  )
}

export default InputSingleSequenceBlock;
