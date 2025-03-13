import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';

import PairSeqAlignmentResult from '@/features/pairSeq/components/PairSeqAlignmentResult';
import DNALoader from '@/components/common/DNALoader';

import { getMainLayout } from '@/utils/getMainLayout';

export const Route = createFileRoute('/local')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `Local alignment  is valuable for finding functional or structural 
    motifs within larger sequences, ignoring unrelated regions. The algorithm used in this feature
    is Smith-Waterman Algorithm.`

  const loading = false;

  return(
  <Stack width="100%">
    <SectionHeader
      title="Local Pairwise Sequence Alignment"
      description={pageDescription}
    />
    <Stack sx={getMainLayout()}>
      <InputPairSequenceBlock
          runSequencing={()=>{}}
      />
      <OutputBlock>
        { loading ? <DNALoader/> 
        : <PairSeqAlignmentResult

        /> }
      </OutputBlock>  
    </Stack>
  </Stack>
  );
}
