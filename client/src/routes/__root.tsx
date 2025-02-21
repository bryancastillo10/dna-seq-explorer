import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

import Navbar from '@/components/navigations/Navbar';
import Footer from '@/components/navigations/Footer';

import Container from '@/components/layout/Container';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
        <Container>
          <Outlet />
        </Container>
      <Footer/>
    </React.Fragment>
  )
}
