import useSingleSeqAnalysis from "@/features/singleSeq/hooks/useSingleSeqAnalysis";

import {
  Box,
  FormControl,
  Select,
  TextField,
  InputLabel,
  MenuItem
} from "@mui/material";
import { Tag, Atom } from "lucide-react";

import SequenceLabel from "@/components/ui/form/SequenceLabel";
import InputControlButtons from "@/components/ui/InputControlButtons";
import SequenceInput from "@/components/ui/form/SequenceInput";

import { getInputStyle } from "@/utils/getInputStyle";


interface InputSingleSequenceBlockprops {
  analysisFeature: "basic" | "advanced";
}

const InputSingleSequenceBlock = ({analysisFeature}: InputSingleSequenceBlockprops) => {
  const {
    singleSeq,
    basicAnalysismoleOptions,
    advancedAnalysismoleOptions,
    handleInputChange,
    handleSelectChange,
    handleClearSingleSeq,
    handleRunAnalysis
  } = useSingleSeqAnalysis();

  const moleculeOptions = analysisFeature === "basic" 
    ? basicAnalysismoleOptions 
    : advancedAnalysismoleOptions;
  
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

          {/* Sample Label */}
          <SequenceLabel
              id="sampleLabel"
              value={singleSeq.sampleLabel}
              onChange={handleInputChange}
              label="Sample Label"
              layout="input"
          />

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
                value={singleSeq.seqType}
                onChange={handleSelectChange}
                fullWidth
              >
              {moleculeOptions.map(mole => (
                <MenuItem key={mole} value={mole}>{mole}</MenuItem>))}
            </Select>
          </FormControl>

          {/* Sequence */}
          <SequenceInput
              id="seq"
              value={singleSeq.seq}
              onChange={handleInputChange}
          />

          <InputControlButtons
              mainBtnLabel="Run Analysis"
              otherBtn1Label="Clear Input"
              otherBtn1Action={handleClearSingleSeq}
          />
      </Box>
  )
}

export default InputSingleSequenceBlock;
