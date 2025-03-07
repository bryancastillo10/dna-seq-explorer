import { createFileRoute } from '@tanstack/react-router'

import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';

import { mockDotPlotData } from '@/features/dotplot/api/mockData';
import DotPlotCanvas from '@/features/dotplot/components/DotPlotCanvas';

export const Route = createFileRoute('/dotplot')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `Dot plot sequence alignment visually compares DNA, RNA, or 
    Protein sequences. Users input two two sequences, and the plot highlights matching 
    regions with dots. This quick visual analysis helps identify similarities and variations 
    between those sequences that can provide insights their relationships. `

  return (
    <Stack width="100%">
      <SectionHeader
        title="Dot Plot Sequence Alignment"
        description={pageDescription}
      />
      <Stack flexDirection={{xs: "column", md:"row"}} marginTop={2} marginBottom={4}>
        <InputPairSequenceBlock />
        <OutputBlock>
            <DotPlotCanvas data={mockDotPlotData}/>
        </OutputBlock>
      </Stack>
    </Stack>
  )
}
