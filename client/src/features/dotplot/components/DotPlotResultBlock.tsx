import { Stack } from '@mui/material'

import DotPlotCanvas from '@/features/dotplot/components/DotPlotCanvas'
import { mockDotPlotData } from '@/features/dotplot/api/mockData'

const DotPlotResultBlock = () => {
  return (
	<Stack flexDirection="column" gap={2} >
	  <DotPlotCanvas data={mockDotPlotData}/>
	</Stack>
  )
}

export default DotPlotResultBlock
