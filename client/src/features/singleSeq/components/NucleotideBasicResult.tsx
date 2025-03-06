import { Typography, Box, Button } from "@mui/material";

import LongStringResult from "@/components/ui/LongStringResult";
import BarChartBlock from "@/components/ui/BarChartBlock";

import type { BasicNucResult } from "@/features/singleSeq/api/interface";

interface NucleotideBasicResultProps {
  analysisResult: BasicNucResult<string,number>;
}

const NucleotideBasicResult = ({analysisResult}: NucleotideBasicResultProps) => {
  const { transcription, 
          reverseComplement, 
          gcContent, 
          nucleotideFrequency, 
          translatedSequence } = analysisResult;

  return (
		<Box justifyContent="start">
      <LongStringResult
          label="Transcription"
          result={transcription}
        />
      <LongStringResult
          label="Reverse Compliment"
          result={reverseComplement} 
      />
      <LongStringResult
          label="Translated Sequence"
          result={translatedSequence}
      />
		  {/* GC Content */}
      <Box sx={{ display:"flex", alignItems:"center", gap: 2 }}>
      	<Typography variant="h6">GC Content</Typography>
			  <Typography variant="h5">{gcContent} %</Typography>
      </Box>
      <BarChartBlock
        title="Nucleotide Frequency"
        data={nucleotideFrequency}
      />

      <Box sx={{
        display:"grid", 
        gridTemplateColumns:"repeat(2, 1fr)", 
        gap: 2,     
        marginBottom: 2}}
      >
        <Button variant="outlined">Clear</Button>
        <Button variant="contained">Save</Button>
      </Box>
    </Box>  
  )
};

export default NucleotideBasicResult;
