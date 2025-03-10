import { Box, Stack, Typography } from "@mui/material";
import { Tag } from "lucide-react";


import { advancedMockData } from "@/features/singleSeq/api/mockData";
import { ControlButtons } from "@/components/ui/form";
import {ShortStringResult, BarChartBlock }from "@/components/ui/outputs";

const AdvancedResultBlock = () => {
  const { sampleLabel, 
		  codonUsage, 
		  dnaType,
		  kingdomTaxa
	    } = advancedMockData;

  return (
	<Stack flexDirection="column" gap={2} >
		<Box display="flex" flexDirection="row" alignItems="center" gap={1}>
    	  <Tag size={20}/>
    	  <Typography>{sampleLabel}</Typography>
    	</Box>

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
