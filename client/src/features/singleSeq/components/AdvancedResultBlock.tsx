import { Stack } from "@mui/material";

import { ControlButtons } from "@/components/ui/form";
import {ShortStringResult, BarChartBlock, SeqLabelOutput }from "@/components/ui/outputs";
import NullOutput from "@/components/layout/NullOutput";
import type { AdvancedAnalysisResponse } from "@/features/singleSeq/api/interface";

interface AdvancedResultBlockProps {
	sampleLabel:string;
	data: AdvancedAnalysisResponse;
}

const AdvancedResultBlock = ({sampleLabel, data}: AdvancedResultBlockProps) => {

    if(!data){
		return( <NullOutput/>);
	}

	const {codonUsage, dnaType, kingdomTaxa } = data;
  return (
	<Stack flexDirection="column" gap={2} >
		<SeqLabelOutput
			sampleLabel={sampleLabel}
		/>

		<BarChartBlock
			title="Codon Usage"
			data={codonUsage}
		/>

		<ShortStringResult
			title="DNA Type Prediction"
			result={dnaType}
		/>

		<ShortStringResult
			title="Possible Taxa (Kingdom)"
			result={kingdomTaxa}
		/>

		<ControlButtons
			mainBtnLabel="Save"
			withOtherBtn2={false}
		/>
	</Stack>
  )
}

export default AdvancedResultBlock;
