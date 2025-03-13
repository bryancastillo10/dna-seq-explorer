import { IntValueResult, LongStringResult } from "@/components/ui/outputs";
import { Stack } from "@mui/material";

import { ControlButtons } from "@/components/ui/form";

import type { LocalGlobalSeqResult } from "@/features/pairSeq/api/interface";

interface PairSeqAlignmentResultProps {
	result: LocalGlobalSeqResult<string>;
};

const PairSeqAlignmentResult = ({result}: PairSeqAlignmentResultProps) => {

	const {  
		seqALabel,
		alignedSeqA,
		seqBLabel,
		alignedSeqB,
		similarity
	} = result;

  return (
	<Stack flexDirection="column" gap={2} >
		<LongStringResult
			label={`Aligned ${seqALabel}`}
			result={alignedSeqA}
			minHeight={200}
		/>

		<LongStringResult
			label={`Aligned ${seqBLabel}`}
			result={alignedSeqB}
			minHeight={200}
		/>

		<IntValueResult
			title="Percent Similarity"
			result={similarity}
			withUnit
		/>

		<ControlButtons
			mainBtnLabel="Save"
			withOtherBtn2={false}
		/>
	</Stack>
  )
}

export default PairSeqAlignmentResult;
