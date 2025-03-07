import { createFileRoute } from '@tanstack/react-router'
import { Stack } from '@mui/material';

import SectionHeader from '@/components/layout/SectionHeader';

export const Route = createFileRoute('/global')({
  component: RouteComponent,
})

function RouteComponent() {
  const pageDescription = `
    Global alignment is useful for comparing entire sequences of DNA or protein to reveal evolutionary relationships and functional similarities. 
    The algorithm used in this feature is Needleman-Wunsch Algorithm.`

  return (
    <Stack width="100%">
      <SectionHeader
        title="Global Pairwise Sequence Alignment"
        description={pageDescription}
      />

    <Stack flexDirection={{xs: "column", md:"row"}} marginTop={2} marginBottom={4}>
      
    </Stack>
  </Stack>

  )
}
