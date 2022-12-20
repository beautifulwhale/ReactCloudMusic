import { useRoutes } from "react-router-dom";
import routeConfig from "./config";

export default function WrapRoute() {
    const element = useRoutes(routeConfig);
    return element;
}