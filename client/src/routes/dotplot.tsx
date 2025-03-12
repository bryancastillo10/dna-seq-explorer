import { createFileRoute } from '@tanstack/react-router'

import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import DNALoader from '@/components/common/DNALoader';

import { getMainLayout } from '@/utils/getMainLayout';
import DotPlotResultBlock from '@/features/dotplot/components/DotPlotResultBlock';
import useDotPlotAlignment from '@/features/dotplot/hooks/useDotPlotAlignment';

export const Route = createFileRoute('/dotplot')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `Dot plot sequence alignment visually compares DNA, RNA, or 
    Protein sequences. Users input two two sequences, and the plot highlights matching 
    regions with dots. This quick visual analysis helps identify similarities and variations 
    between those sequences that can provide insights their relationships. `

  const { runDotPlot, dotPlotResult, loading } = useDotPlotAlignment();

  return (
    <Stack width="100%">
      <SectionHeader
        title="Dot Plot Sequence Alignment"
        description={pageDescription}
      />
      <Stack sx={getMainLayout()}>
            <InputPairSequenceBlock
                runSequencing={runDotPlot}              
              />
            <OutputBlock>
                {loading ? <DNALoader/> 
                :(<DotPlotResultBlock 
                    result={dotPlotResult} 
                />)}
            </OutputBlock>
      </Stack>
    </Stack>
  )
}
