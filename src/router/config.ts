import { RouteObject } from "react-router-dom"
import Discover from "../pages/discover";
import Mine from "../pages/mine";

const routeConfig:RouteObject[] = [
    {
        path: "/discover",
        element: <Discover />
    },
    {
        path: '/mine',
        element: <Mine />
    }
]

export default routeConfig;