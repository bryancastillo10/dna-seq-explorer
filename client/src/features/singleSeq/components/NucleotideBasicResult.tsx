import { Typography, Box } from "@mui/material";

import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";
import { IntValueResult, LongStringResult, BarChartBlock, SeqLabelOutput } from "@/components/ui/outputs";

import { ControlButtons } from "@/components/ui/form";

interface NucleotideBasicResultProps {
  analysisResult?: BasicAnalysisResults;
  sampleLabel: string;
  reset: () => void;
}

const NucleotideBasicResult = ({analysisResult, sampleLabel, reset}: NucleotideBasicResultProps) => {
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
    <SeqLabelOutput
        sampleLabel={sampleLabel}
    />
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
          otherBtn1Label="Clear Output"
          otherBtn1Action={reset}
          withOtherBtn2={false}
      />
    </Box>
    </>  
  )
};

export default NucleotideBasicResult;
