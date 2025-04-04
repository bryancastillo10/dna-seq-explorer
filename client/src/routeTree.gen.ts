/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LocalImport } from './routes/local'
import { Route as GlobalImport } from './routes/global'
import { Route as DotplotImport } from './routes/dotplot'
import { Route as BasicImport } from './routes/basic'
import { Route as AdvancedImport } from './routes/advanced'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const LocalRoute = LocalImport.update({
  id: '/local',
  path: '/local',
  getParentRoute: () => rootRoute,
} as any)

const GlobalRoute = GlobalImport.update({
  id: '/global',
  path: '/global',
  getParentRoute: () => rootRoute,
} as any)

const DotplotRoute = DotplotImport.update({
  id: '/dotplot',
  path: '/dotplot',
  getParentRoute: () => rootRoute,
} as any)

const BasicRoute = BasicImport.update({
  id: '/basic',
  path: '/basic',
  getParentRoute: () => rootRoute,
} as any)

const AdvancedRoute = AdvancedImport.update({
  id: '/advanced',
  path: '/advanced',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/advanced': {
      id: '/advanced'
      path: '/advanced'
      fullPath: '/advanced'
      preLoaderRoute: typeof AdvancedImport
      parentRoute: typeof rootRoute
    }
    '/basic': {
      id: '/basic'
      path: '/basic'
      fullPath: '/basic'
      preLoaderRoute: typeof BasicImport
      parentRoute: typeof rootRoute
    }
    '/dotplot': {
      id: '/dotplot'
      path: '/dotplot'
      fullPath: '/dotplot'
      preLoaderRoute: typeof DotplotImport
      parentRoute: typeof rootRoute
    }
    '/global': {
      id: '/global'
      path: '/global'
      fullPath: '/global'
      preLoaderRoute: typeof GlobalImport
      parentRoute: typeof rootRoute
    }
    '/local': {
      id: '/local'
      path: '/local'
      fullPath: '/local'
      preLoaderRoute: typeof LocalImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/advanced': typeof AdvancedRoute
  '/basic': typeof BasicRoute
  '/dotplot': typeof DotplotRoute
  '/global': typeof GlobalRoute
  '/local': typeof LocalRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/advanced': typeof AdvancedRoute
  '/basic': typeof BasicRoute
  '/dotplot': typeof DotplotRoute
  '/global': typeof GlobalRoute
  '/local': typeof LocalRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/advanced': typeof AdvancedRoute
  '/basic': typeof BasicRoute
  '/dotplot': typeof DotplotRoute
  '/global': typeof GlobalRoute
  '/local': typeof LocalRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/advanced' | '/basic' | '/dotplot' | '/global' | '/local'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/advanced' | '/basic' | '/dotplot' | '/global' | '/local'
  id:
    | '__root__'
    | '/'
    | '/advanced'
    | '/basic'
    | '/dotplot'
    | '/global'
    | '/local'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AdvancedRoute: typeof AdvancedRoute
  BasicRoute: typeof BasicRoute
  DotplotRoute: typeof DotplotRoute
  GlobalRoute: typeof GlobalRoute
  LocalRoute: typeof LocalRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AdvancedRoute: AdvancedRoute,
  BasicRoute: BasicRoute,
  DotplotRoute: DotplotRoute,
  GlobalRoute: GlobalRoute,
  LocalRoute: LocalRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/advanced",
        "/basic",
        "/dotplot",
        "/global",
        "/local"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/advanced": {
      "filePath": "advanced.tsx"
    },
    "/basic": {
      "filePath": "basic.tsx"
    },
    "/dotplot": {
      "filePath": "dotplot.tsx"
    },
    "/global": {
      "filePath": "global.tsx"
    },
    "/local": {
      "filePath": "local.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
