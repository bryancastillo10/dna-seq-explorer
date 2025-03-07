import { Box, Stack, Typography, Button } from "@mui/material";
import { Tag } from "lucide-react";

import LongStringResult from "@/components/ui/LongStringResult";
import BarChartBlock from "@/components/ui/BarChartBlock";

import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";
import IntValueResult from "@/components/ui/IntValueResult";

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
}

export default ProteinBasicResult;
