import { Stack } from '@mui/material'
import { createLazyFileRoute } from '@tanstack/react-router'

import Hero from '@/features/home/components/Hero'
import AppGuide from '@/features/home/components/AppGuide'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  
  return (
    <Stack width="100%">
    <Hero/>
    <AppGuide/>
    </Stack>
  )
};
