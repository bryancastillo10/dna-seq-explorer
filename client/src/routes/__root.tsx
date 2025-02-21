import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

import Navbar from '@/components/navigations/Navbar';
import Footer from '@/components/navigations/Footer';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar/>
        <Outlet />
      <Footer/>
    </React.Fragment>
  )
}
