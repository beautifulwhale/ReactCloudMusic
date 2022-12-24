import path from 'path'
import { lazy } from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('../pages/discover/index'))
const Mine = lazy(() => import('../pages/mine/index'))
const Attention = lazy(() => import('../pages/attention/index'))
const Musician = lazy(() => import('../pages/musician/index'))
const Download = lazy(() => import('../pages/download/index'))
const Shopping = lazy(() => import('../pages/shopping/index'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Discover />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/attention',
    element: <Attention />
  },
  {
    path: '/musician',
    element: <Musician />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/shopping',
    element: <Shopping />
  }
]
export default function RouterELement() {
  return useRoutes(routes)
}
