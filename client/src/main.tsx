import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

import PageNotFound from '@/components/navigations/PageNotFound';
import Providers from '@/components/providers/Providers';
import { GlobalStyles } from '@/style/globalStyles';

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <PageNotFound/>
});

declare module '@tanstack/react-router' {
  interface Register{
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <GlobalStyles/>
      <RouterProvider router={router} />
    </Providers>  
  </StrictMode>,
)
