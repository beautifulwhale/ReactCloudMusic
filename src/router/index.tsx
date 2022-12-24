import path from 'path'
import { useRoutes, RouteObject } from 'react-router-dom'
import Discover from '../pages/discover'
import Mine from '../pages/mine'
import Login from '../components/login'
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
    path: '/login',
    element: <Login />
  }
]
export default function RouterELement() {
  return useRoutes(routes)
}
