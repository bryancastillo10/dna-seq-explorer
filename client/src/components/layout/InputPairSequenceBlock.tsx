import { Box } from "@mui/material";

import { 
  InputControlButtons,
  BioMoleSelect,
  SequenceLabel,
  SequenceInput
} from "@/components/ui/form";


const InputPairSequenceBlock = () => {

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
      <BioMoleSelect
          value=""
          onChange={()=>{}}
          feature="pairwise"
      />
    

      {/* Sequence A Label */}
      <SequenceLabel
          id="seqALabel"
          value=""
          onChange={()=>{}}
          label="Sequence 1 Label"
          layout="inputWithBtn"
      />

      {/* Sequence A */}
      <SequenceInput
          id="seqA"
          value=""
          onChange={()=>{}}
          label="Sequence 1"
      />

      {/* Sequence B Label */}
      <SequenceLabel
          id="seqBLabel"
          value=""
          onChange={()=>{}}
          label="Sequence 2 Label"
          layout="inputWithBtn"
      />

      {/* Sequence B */}
      <SequenceInput
          id="seqB"
          value=""
          onChange={()=>{}}
          label="Sequence 2"
      />

      
      <InputControlButtons
          mainBtnLabel="Run Analysis"
          otherBtn1Label="Clear Input"
          otherBtn1Action={()=>{}}
      />      
	</Box>
  )
}

export default InputPairSequenceBlock;
