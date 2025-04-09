import { createFileRoute } from '@tanstack/react-router'

import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import DNALoader from '@/components/common/DNALoader';

import { getMainLayout } from '@/utils/getMainLayout';
import DotPlotResultBlock from '@/features/dotplot/components/DotPlotResultBlock';
import useDotPlotAlignment from '@/features/dotplot/hooks/useDotPlotAlignment';
import useDelayedLoading from '@/hooks/useDelayedLoading';
import NullOutput from '@/components/layout/NullOutput';

import { SaveModal } from '@/components/ui/outputs';
import { useModalStore } from '@/zustand/modal';

export const Route = createFileRoute('/dotplot')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `Dot plot sequence alignment visually compares DNA, RNA, or 
    Protein sequences. Users input two two sequences, and the plot highlights matching 
    regions with dots. This quick visual analysis helps identify similarities and variations 
    between those sequences that can provide insights their relationships. `

  const { runDotPlot, dotPlotResult, loading, reset } = useDotPlotAlignment();

  const result = dotPlotResult?.data;

  const delayedLoading = useDelayedLoading(loading);

  const { isOpen, closeModal } = useModalStore();

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
                {delayedLoading ? <DNALoader/> 
                :( dotPlotResult 
                ? <DotPlotResultBlock 
                    result={result} 
                    reset={reset}
                /> : <NullOutput/>)}
            </OutputBlock>


            <SaveModal
              isOpen={isOpen}
              onClose={closeModal}
              {...(result ? { 
                sampleALabel: result.seqALabel,
                sampleBLabel: result.seqBLabel
              }: {})}
            />

      </Stack>
    </Stack>
  )
}
