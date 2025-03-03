import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Container } from '@mui/material'
import Navbar from '@/components/navigations/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
        <Navbar/>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
    </React.Fragment>
  )
}
