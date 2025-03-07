import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';

export const Route = createFileRoute('/local')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `Local alignment  is valuable for finding functional or structural 
    motifs within larger sequences, ignoring unrelated regions. The algorithm used in this feature
    is Smith-Waterman Algorithm.`

  return(
  <Stack width="100%">
    <SectionHeader
      title="Local Pairwise Sequence Alignment"
      description={pageDescription}
    />
    <Stack flexDirection={{xs: "column", md:"row"}} marginTop={2} marginBottom={4}>

    </Stack>
  </Stack>
  );
}
