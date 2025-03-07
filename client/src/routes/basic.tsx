import { createFileRoute } from '@tanstack/react-router';
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputSingleSequenceBlock from '@/components/layout/InputSingleSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import BasicResultBlock from '@/features/singleSeq/components/BasicResultBlock';

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  
  const pageDescription = `Enter your DNA/RNA or protein sequence, choose the sequence type, 
    and click “Run” to analyze. For DNA/RNA sequences, you can expect outputs such as GC content, 
    nucleotide frequency, and transcription analysis; for protein sequences, you can expect 
    outputs such as amino acid frequency, molecular weight, and reading frames. 
    Click “Save Output” to save your results, and “Clear” to start a new analysis. Ensure that 
    your inputs are correct to avoid warnings.
  `

  return (
    <Stack width="100%">
      <SectionHeader
        title="Basic Sequence Analysis"
        description={pageDescription}
      />
      <Stack flexDirection={{xs: "column", md:"row"}} marginTop={2} marginBottom={4}>
        <InputSingleSequenceBlock analysisFeature='basic' />
        <OutputBlock>
          <BasicResultBlock/>
        </OutputBlock>
      </Stack>
    </Stack>
  )
}
