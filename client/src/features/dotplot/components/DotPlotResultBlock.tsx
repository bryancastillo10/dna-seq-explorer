import { Stack, Box, Typography } from '@mui/material'

import DotPlotCanvas from '@/features/dotplot/components/DotPlotCanvas'
import { mockDotPlotData } from '@/features/dotplot/api/mockData'
import { IntValueResult } from '@/components/ui/outputs';
import { ControlButtons } from '@/components/ui/form';

import NullOutput from '@/components/layout/NullOutput';
import type { DotPlotResponse } from '@/features/dotplot/api/interface';

interface DotPlotResultBlockProps {
	result: DotPlotResponse;
}

const DotPlotResultBlock = ({result}: DotPlotResultBlockProps) => {
	const { seqALabel, seqBLabel, matrix, match, mismatch } = mockDotPlotData;

	if(mockDotPlotData === null){
		return (<NullOutput/>);
	}

	console.log(result);

  return (
	<Stack flexDirection="column" gap={2} >
	  <DotPlotCanvas 
		matrix={matrix} 
		seqALabel={seqALabel}
		seqBLabel={seqBLabel}
	  />

		<Box sx={{display:"flex", justifyContent:"center"}}>
			<Typography variant="body2">{seqALabel} vs. {seqBLabel}</Typography>
		</Box>

		<Box sx={{display:"flex", justifyContent:"space-evenly"}}>
			<IntValueResult
				title="Matches"
				result={match}
			/>

			<IntValueResult
				title="Mismatches"
				result={mismatch}
			/>
		</Box>

		<ControlButtons
			mainBtnLabel='Save'
			withOtherBtn2={false}
		/>
	</Stack>
  )
}

export default DotPlotResultBlock;
