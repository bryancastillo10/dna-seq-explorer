import { Box, Stack, Typography } from "@mui/material";
import { Tag } from "lucide-react";

import BarChartBlock from "@/components/ui/BarChartBlock";
import { advancedMockData } from "@/features/singleSeq/api/mockData";

const AdvancedResultBlock = () => {
  const { sampleLabel, codonUsage, prediction } = advancedMockData;
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

		<Box sx={{ display:"flex", alignItems:"center", gap: 2, my: 2 }}>
			<Typography variant="h6">Prediction</Typography>
			<Typography>{prediction}</Typography>
		</Box>
	</Stack>
  )
}

export default AdvancedResultBlock;
