import { Stack, Box, Typography } from '@mui/material'

import DotPlotCanvas from '@/features/dotplot/components/DotPlotCanvas'

import { IntValueResult } from '@/components/ui/outputs';
import { ControlButtons } from '@/components/ui/form';

import type { DotPlotResponse } from '@/features/dotplot/api/interface';

interface DotPlotResultBlockProps {
	result: DotPlotResponse;
	reset: () => void;
}

const DotPlotResultBlock = ({result, reset}: DotPlotResultBlockProps) => {

	const { matrix, seqALabel, seqBLabel, match, mismatch } = result;

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
			otherBtn1Label='Clear Output'
			otherBtn1Action={reset}
			withOtherBtn2={false}
		/>
	</Stack>
  )
}

export default DotPlotResultBlock;
