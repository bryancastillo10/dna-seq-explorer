import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputPairSequenceBlock from '@/components/layout/InputPairSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';

import PairSeqAlignmentResult from '@/features/pairSeq/components/PairSeqAlignmentResult';
import DNALoader from '@/components/common/DNALoader';
import NullOutput from '@/components/layout/NullOutput';

import useLocalAlignment from '@/features/pairSeq/hooks/useLocalAlignment';
import useDelayedLoading from '@/hooks/useDelayedLoading';
import useFileExport from '@/features/fileExport/hooks/useFileExport';
import { getMainLayout } from '@/utils/getMainLayout';

import { SaveModal } from '@/components/ui/outputs';
import { useModalStore } from '@/zustand/modal';

export const Route = createFileRoute('/local')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `Local alignment  is valuable for finding functional or structural 
    motifs within larger sequences, ignoring unrelated regions. The algorithm used in this feature
    is Smith-Waterman Algorithm.`

  const {runLocalAlignment, sequencingResult, loading, reset } = useLocalAlignment();

  const result = sequencingResult?.data;

  const delayedLoading = useDelayedLoading(loading);

  const { isOpen, closeModal } = useModalStore();

  const { fileExport } = useFileExport("local");

  return(
  <Stack width="100%">
    <SectionHeader
      title="Local Pairwise Sequence Alignment"
      description={pageDescription}
    />
    <Stack sx={getMainLayout()}>
      <InputPairSequenceBlock
          runSequencing={runLocalAlignment}
      />
      <OutputBlock>
        { delayedLoading 
        ? <DNALoader/> 
        : (sequencingResult 
        ? <PairSeqAlignmentResult
              result={result}
              reset={reset}
        /> : <NullOutput/>) }
      </OutputBlock>  

      <SaveModal
         isOpen={isOpen}
         onClose={closeModal}

          fileExport={fileExport}

         {...(result ? { 
           sampleALabel: result.seqALabel,
           sampleBLabel: result.seqBLabel
         }: {})}
      />
    </Stack>
  </Stack>
  );
}
