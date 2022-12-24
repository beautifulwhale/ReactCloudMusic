import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
const Recommend = lazy(()=> import('../pages/recommend'))
const TopList = lazy(()=> import('../pages/toplist'))
const PlayList = lazy(()=> import('../pages/playlist'))
const DjRadio = lazy(()=> import('../pages/djradio'))
const Artist = lazy(()=> import('../pages/artist'))
const Album = lazy(()=> import('../pages/album'))

// 发现音乐子路由
export const discoverChildRoutes: RouteObject[] = [
  {
    path: '/discover',
    element: <Recommend />,
    index: true
  },
  {
    path: '/discover/toplist',
    element: <TopList />
  },
  {
    path: '/discover/playlist',
    element: <PlayList />
  },
  {
    path: '/discover/djradio',
    element: <DjRadio />
  },
  {
    path: '/discover/artist',
    element: <Artist />
  },
  {
    path: '/discover/album',
    element: <Album />
  }
]
