import { Box } from "@mui/material";

import type { BasicAnalysisResults } from "@/features/singleSeq/api/interface";

interface ProteinBasicResultProps {
  analysisResult?: BasicAnalysisResults;
  sampleLabel: string;
}

const ProteinBasicResult = ({analysisResult, sampleLabel}: ProteinBasicResultProps) => {
	

  return (
	<Box height={400}>
	  Protein
		{sampleLabel}
	</Box>
  )
}

export default ProteinBasicResult;
