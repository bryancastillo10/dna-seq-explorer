import useSingleSeqAnalysis from "@/features/singleSeq/hooks/useSingleSeqAnalysis";

import { Box } from "@mui/material";

import { 
  InputControlButtons,
  BioMoleSelect,
  SequenceLabel,
  SequenceInput
} from "@/components/ui/form";


interface InputSingleSequenceBlockprops {
  analysisFeature: "basic" | "advanced";
}

const InputSingleSequenceBlock = ({analysisFeature}: InputSingleSequenceBlockprops) => {
  const {
    singleSeq,
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
          {/* Sample Label */}
          <SequenceLabel
              id="sampleLabel"
              value={singleSeq.sampleLabel}
              onChange={handleInputChange}
              label="Sample Label"
              layout="input"
          />

          {/* Biomolecule Type */}
          <BioMoleSelect
              value={singleSeq.seqType}
              onChange={handleSelectChange}
              feature={analysisFeature}   
          />

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
