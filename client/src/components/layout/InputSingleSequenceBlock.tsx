import useSingleSeqAnalysis from "@/features/singleSeq/hooks/useSingleSeqAnalysis";

import {
  Box,
  FormControl,
  Select,
  TextField,
  InputLabel,
  MenuItem
} from "@mui/material";
import { Tag, Atom, Dna } from "lucide-react";

import FormFieldLabel from "@/components/ui/FormFieldLabel";
import InputControlButtons from "@/components/ui/InputControlButtons";

const InputSingleSequenceBlock = () => {
  const {
    singleSeq,
    moleculeOptions,
    handleInputChange,
    handleSelectChange,
    handleClearSingleSeq,
    handleRunAnalysis
  } = useSingleSeqAnalysis();
  
  return (
        <Box
          component="form"
          onSubmit={handleRunAnalysis}
          sx={{
            display:"flex",
            flexDirection:"column",
            gap: 2,
            width: {xs:"100%", md:"50%"},
          }}
        >
          <FormControl sx={{width: {xs: "100%", md:"50%"}, my: 1}}>
              <TextField
                id="sampleLabel"
                value={singleSeq.sampleLabel}
                onChange={handleInputChange}
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
                value={singleSeq.seqType}
                onChange={handleSelectChange}
                fullWidth
              >
              {moleculeOptions.map(mole => (
                <MenuItem key={mole} value={mole}>{mole}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl sx={{width: {xs: "100%", md:"90%"}, my: 1}}>
            <TextField  
              id="seq"
              value={singleSeq.seq}
              onChange={handleInputChange}
              label={<FormFieldLabel label="Sequence" icon={Dna} />}      
              multiline
              rows={8}
            />
          </FormControl>
          <InputControlButtons
              mainBtnLabel="Run Analysis"
              otherBtn1Label="Clear Input"
              otherBtn1Action={handleClearSingleSeq}
          />
      </Box>
  )
}

export default InputSingleSequenceBlock;
