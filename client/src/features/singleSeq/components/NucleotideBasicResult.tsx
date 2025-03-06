import { Typography, Box, Stack, Button } from "@mui/material";
import { Tag } from "lucide-react";
import LongStringResult from "@/components/ui/LongStringResult";
import BarChartBlock from "@/components/ui/BarChartBlock";

import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";

interface NucleotideBasicResultProps {
  analysisResult?: BasicAnalysisResults;
  sampleLabel: string;
}

const NucleotideBasicResult = ({analysisResult, sampleLabel}: NucleotideBasicResultProps) => {
  if(!analysisResult){
    return <Typography>Data Failed to Fetch</Typography>
  }

  if (!("transcription" in analysisResult)) {
    return <Typography>Data is not of DNA & RNA type.</Typography>;
  }

  const { transcription, 
          reverseComplement, 
          gcContent, 
          nucleotideFrequency, 
          translatedSequence } = analysisResult;

  return (
    <>
    <Stack flexDirection="row" alignItems="center" gap={1}>
      <Tag size={20}/>
      <Typography>{sampleLabel}</Typography>
    </Stack>
		<Box>
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
    </>  
  )
};

export default NucleotideBasicResult;
