import { IntValueResult, LongStringResult } from "@/components/ui/outputs";
import { Stack } from "@mui/material";

import { ControlButtons } from "@/components/ui/form";

import type { LocalGlobalSeqResult } from "@/features/pairSeq/api/interface";

interface PairSeqAlignmentResultProps {
	result: LocalGlobalSeqResult<string>;
	reset: () => void;
};

const PairSeqAlignmentResult = ({result, reset}: PairSeqAlignmentResultProps) => {

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
			otherBtn1Label="Clear Output"
			otherBtn1Action={reset}
			withOtherBtn2={false}
		/>
	</Stack>
  )
}

export default PairSeqAlignmentResult;
