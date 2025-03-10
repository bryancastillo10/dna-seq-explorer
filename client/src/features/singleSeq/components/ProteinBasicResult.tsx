import { Box, Stack, Typography } from "@mui/material";
import { Tag } from "lucide-react";

import { BarChartBlock, LongStringResult, IntValueResult } from "@/components/ui/outputs";

import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";
import { ControlButtons } from "@/components/ui/form";

interface ProteinBasicResultProps {
  analysisResult?: BasicAnalysisResults;
  sampleLabel: string;
}

const ProteinBasicResult = ({analysisResult, sampleLabel}: ProteinBasicResultProps) => {
	if(!analysisResult){
    return <Typography>Data Failed to Fetch</Typography>
  }

  if (!("aminoAcidFrequency" in analysisResult)) {
    return <Typography>Data is not of Protein type.</Typography>;
  }

  const { aminoAcidSequence, aminoAcidFrequency,
	molecularWeight, isoelectricPoint } = analysisResult;

  return (
	<>
		<Stack flexDirection="row" alignItems="center" gap={1}>
		<Tag size={20}/>
		<Typography>{sampleLabel}</Typography>
		</Stack>
		<Box>	
			<LongStringResult
				label="Amino Acid Sequence"
				result={aminoAcidSequence}
			/>

			<IntValueResult
				title="Molecular Weight"
				result={molecularWeight}
				withUnit
				unit=" Da"
			/>

			<IntValueResult
				title="Isoelectric Point"
				result={isoelectricPoint}
			/>

			<BarChartBlock
				title="Amino Acid Frequency"
				data={aminoAcidFrequency}
			/>
			
			<ControlButtons
				mainBtnLabel="Save"
				withOtherBtn2={false}
			/>
		</Box>
	</>
  )
}

export default ProteinBasicResult;
