import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Container, Stack } from '@mui/material'

import Navbar from '@/components/navigations/Navbar'
import Footer from '@/components/navigations/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar/>
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Stack padding={2}>
          <Outlet />
        </Stack>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}
