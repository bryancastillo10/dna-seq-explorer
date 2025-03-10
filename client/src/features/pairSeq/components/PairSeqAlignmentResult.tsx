import { IntValueResult, LongStringResult } from "@/components/ui/outputs";
import { Stack } from "@mui/material";

import { mockLocalAlign } from "@/features/pairSeq/api/mockData";
import { ControlButtons } from "@/components/ui/form";

import NullOutput from "@/components/layout/NullOutput";

const PairSeqAlignmentResult = () => {
	const {  
		seqALabel,
		alignedSeqA,
		seqBLabel,
		aliignedSeqB,
		similarity
	} = mockLocalAlign;

	if(mockLocalAlign === null){
		return (<NullOutput/>);
	}

  return (
	<Stack flexDirection="column" gap={2} >
		<LongStringResult
			label={`Aligned ${seqALabel}`}
			result={alignedSeqA}
			minHeight={200}
		/>

		<LongStringResult
			label={`Aligned ${seqBLabel}`}
			result={aliignedSeqB}
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
