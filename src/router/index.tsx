import path from "path";
import { useRoutes, RouteObject } from "react-router-dom";
import Discover from "../pages/discover";
import Mine from "../pages/mine";
const routes:RouteObject[] = [
    {
        path:'/',
        element:<Discover />,
        children: [
          {
            path: '/discover',
            element: <Discover/>
          }
        ]
    },
    {
        path:"/mine",
        element: <Mine />
    }
]
export default function RouterELement() {
    return useRoutes(routes)
}
