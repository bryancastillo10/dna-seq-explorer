import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import PairSeqAlignmentResult from '@/features/pairSeq/components/PairSeqAlignmentResult';
import DNALoader from '@/components/common/DNALoader';

import { getMainLayout } from '@/utils/getMainLayout';
import useGlobalAlignment from '@/features/pairSeq/hooks/useGlobalAlignment';
import useDelayedLoading from '@/hooks/useDelayedLoading';
import NullOutput from '@/components/layout/NullOutput';

import { SaveModal } from '@/components/ui/outputs';
import { useModalStore } from '@/zustand/modal';

export const Route = createFileRoute('/global')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `
    Global alignment is useful for comparing entire sequences of DNA or protein to reveal evolutionary relationships and functional similarities. 
    The algorithm used in this feature is Needleman-Wunsch Algorithm.`

  const { runGlobalAlignment, sequencingResult, loading, reset } = useGlobalAlignment();

  const result = sequencingResult?.data;

  const delayedLoading = useDelayedLoading(loading);

  const { isOpen, closeModal } = useModalStore();

  return (
    <Stack width="100%">
      <SectionHeader
        title="Global Pairwise Sequence Alignment"
        description={pageDescription}
      />
    <Stack sx={getMainLayout}>
      <InputPairSequenceBlock
          runSequencing={runGlobalAlignment}
      />
      <OutputBlock>
        {delayedLoading ? <DNALoader/> 
      : (sequencingResult
      ? <PairSeqAlignmentResult
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
