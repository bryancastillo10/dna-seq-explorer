import { createFileRoute } from '@tanstack/react-router'

import { Stack } from '@mui/material';

import { mockDotPlotData } from '@/features/dotplot/api/mockData';
import DotPlotCanvas from '@/features/dotplot/components/DotPlotCanvas';

export const Route = createFileRoute('/dotplot')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Stack width="100%">
      <DotPlotCanvas data={mockDotPlotData} />
    </Stack>
  )
}
