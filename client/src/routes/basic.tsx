import { createFileRoute } from '@tanstack/react-router';
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputSingleSequenceBlock from '@/components/layout/InputSingleSequenceBlock';
import OutputBasicAnalysisBlock from '@/components/layout/OutputBasicAnalysisBlock';

export const Route = createFileRoute('/basic')({
  component: RouteComponent,
})

function RouteComponent() {
  
  const pageDescription = `
    Enter your DNA/ RNA or Protein sequence, choose the sequence type, and click "Run" to analyze. For
  DNA/RNA, you can expect outputs such as GC content, nucleotide frequency and transcription;
  for Protein, you can expect to get amino acid frequency, molecular weight, or reading frames. "Save Output" to save results,
  and "Clear" to start a new. Ensure correct inputs to avoid warnings.
  `

  return (
    <Stack width="100%">
      <SectionHeader
        title="Basic Sequence Analysis"
        description={pageDescription}
      />
      <Stack flexDirection={{xs: "column", md:"row"}} marginTop={2} marginBottom={4}>
        <InputSingleSequenceBlock />
        <OutputBasicAnalysisBlock />
      </Stack>
    </Stack>
  )
}
