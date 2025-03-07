import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';
import InputSingleSequenceBlock from '@/components/layout/InputSingleSequenceBlock';
import OutputBlock from '@/components/layout/OutputBlock';
import AdvancedResultBlock from '@/features/singleSeq/components/AdvancedResultBlock';

export const Route = createFileRoute('/advanced')({
  component: RouteComponent,
});

function RouteComponent() {
  const pageDescription = `
  Enter your DNA/RNA sequence for advanced AI classification based on codon usage. Protein sequences are not allowed.
  Note: Although the model was rigorously evaluated via cross-validation and EDA, it may still err and is for demonstration purposes only.
  Click "Run" to analyze, "Save Output" to save results, and "Clear" to start over.
`

  return (
  <Stack width="100%">
    <SectionHeader
      title="DNA Classification Based on Trained Codon Usage Dataset"
      description={pageDescription}
    />

    <Stack flexDirection={{xs: "column", md:"row"}} marginTop={2} marginBottom={4}>
        <InputSingleSequenceBlock />
        <OutputBlock>
          <AdvancedResultBlock/>
        </OutputBlock>
      </Stack>
  </Stack>
  )
}
