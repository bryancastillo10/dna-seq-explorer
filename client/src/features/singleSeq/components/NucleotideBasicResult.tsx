import { Typography, Box, Stack } from "@mui/material";
import { Tag } from "lucide-react";

import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";
import { IntValueResult, LongStringResult, BarChartBlock } from "@/components/ui/outputs";

import { ControlButtons } from "@/components/ui/form";

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

      <IntValueResult
          title="GC Content"
          result={gcContent}
          withUnit
      />

      <BarChartBlock
        title="Nucleotide Frequency"
        data={nucleotideFrequency}
      />

      <ControlButtons
          mainBtnLabel="Save"
          withOtherBtn2={false}
      />
    </Box>
    </>  
  )
};

export default NucleotideBasicResult;
