import { Stack } from "@mui/material";


import { advancedMockData } from "@/features/singleSeq/api/mockData";
import { ControlButtons } from "@/components/ui/form";
import {ShortStringResult, BarChartBlock, SeqLabelOutput }from "@/components/ui/outputs";
import NullOutput from "@/components/layout/NullOutput";

const AdvancedResultBlock = () => {
  const { sampleLabel, 
		  codonUsage, 
		  dnaType,
		  kingdomTaxa
	    } = advancedMockData;


    if(advancedMockData === null){
		return( <NullOutput/>);
	}

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
