import { Typography, Box } from "@mui/material";

import LongStringResult from "@/components/ui/LongStringResult";

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
		<Box height={400}>
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
			
        <Typography variant="h6">Nucleotide Frequency</Typography>
    </Box>  
  )
};

export default NucleotideBasicResult;
