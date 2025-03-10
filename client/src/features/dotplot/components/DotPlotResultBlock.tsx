import { Stack, Box, Typography } from '@mui/material'

import DotPlotCanvas from '@/features/dotplot/components/DotPlotCanvas'
import { mockDotPlotData } from '@/features/dotplot/api/mockData'

const DotPlotResultBlock = () => {
	const { matrix } = mockDotPlotData;

  return (
	<Stack flexDirection="column" gap={2} >
	  <DotPlotCanvas matrix={matrix} />

		<Box>
			<Typography></Typography>
		</Box>
	</Stack>
  )
}

export default DotPlotResultBlock
