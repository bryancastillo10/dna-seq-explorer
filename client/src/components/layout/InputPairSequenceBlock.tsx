import { Box } from "@mui/material";

import { 
  ControlButtons,
  BioMoleSelect,
  SequenceLabel,
  SequenceInput
} from "@/components/ui/form";

import usePairSeqAnalysis from "@/features/pairSeq/hooks/usePairSeqAnalysis";
import { type SubmitPairSeq } from "@/features/pairSeq/api/interface";

interface InputPairSequenceBlockProps {
    runSequencing: SubmitPairSeq;
}

const InputPairSequenceBlock = ({runSequencing}: InputPairSequenceBlockProps) => {
  const {
		seqType,
		seqA,
		seqB,
		handleSelectChange,
		handleSeqAChange,
		handleSeqBChange,
		handleClearPairSeq,
    handleRunAnalysis
	} = usePairSeqAnalysis(runSequencing);
 


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
     {/* Biomolecule Type */}
      <BioMoleSelect
          value={seqType}
          onChange={handleSelectChange}
          feature="pairwise"
      />
    

      {/* Sequence A Label */}
      <SequenceLabel
          id="label"
          value={seqA.label}
          onChange={handleSeqAChange}
          label="Sequence 1 Label"
          layout="inputWithBtn"
      />

      {/* Sequence A */}
      <SequenceInput
          id="sequence"
          value={seqA.sequence}
          onChange={handleSeqAChange}
          label="Sequence 1"
      />

      {/* Sequence B Label */}
      <SequenceLabel
          id="label"
          value={seqB.label}
          onChange={handleSeqBChange}
          label="Sequence 2 Label"
          layout="inputWithBtn"
      />

      {/* Sequence B */}
      <SequenceInput
          id="sequence"
          value={seqB.sequence}
          onChange={handleSeqBChange}
          label="Sequence 2"
      />
   
      <ControlButtons
          mainBtnLabel="Run Analysis"
          otherBtn1Label="Clear Input"
          otherBtn1Action={handleClearPairSeq}
          withOtherBtn2={false}
      />      
	</Box>
  )
}

export default InputPairSequenceBlock;
