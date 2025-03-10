import useSingleSeqAnalysis from "@/features/singleSeq/hooks/useSingleSeqAnalysis";

import { Box } from "@mui/material";

import { 
  ControlButtons,
  BioMoleSelect,
  SequenceLabel,
  SequenceInput
} from "@/components/ui/form";
import { type SubmitSingleSeq } from "@/features/singleSeq/api/interface";


interface InputSingleSequenceBlockprops {
  analysisFeature: "basic" | "advanced";
  runAnalysis: SubmitSingleSeq;
}

const InputSingleSequenceBlock = ({analysisFeature, runAnalysis}: InputSingleSequenceBlockprops) => {
  const {
    singleSeq,
    handleInputChange,
    handleSelectChange,
    handleClearSingleSeq,
    handleRunAnalysis
  } = useSingleSeqAnalysis(runAnalysis);

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

          <ControlButtons
              mainBtnLabel="Run Analysis"
              otherBtn1Label="Clear Input"
              otherBtn1Action={handleClearSingleSeq}
              withOtherBtn2
          />
      </Box>
  )
}

export default InputSingleSequenceBlock;
