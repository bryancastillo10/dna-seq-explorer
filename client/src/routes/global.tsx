import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import PairSeqAlignmentResult from '@/features/pairSeq/components/PairSeqAlignmentResult';
import DNALoader from '@/components/common/DNALoader';

import { getMainLayout } from '@/utils/getMainLayout';
import useLocalAlignment from '@/features/pairSeq/hooks/useLocalAlignment';

export const Route = createFileRoute('/global')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `
    Global alignment is useful for comparing entire sequences of DNA or protein to reveal evolutionary relationships and functional similarities. 
    The algorithm used in this feature is Needleman-Wunsch Algorithm.`

  const { loading, runLocalAlignment } = useLocalAlignment();

  return (
    <Stack width="100%">
      <SectionHeader
        title="Global Pairwise Sequence Alignment"
        description={pageDescription}
      />
    <Stack sx={getMainLayout}>
      <InputPairSequenceBlock
          runSequencing={runLocalAlignment}
      />
      <OutputBlock>
        {loading ? <DNALoader/> : <PairSeqAlignmentResult/>}
      </OutputBlock>
    </Stack>
  </Stack>
  )
}
