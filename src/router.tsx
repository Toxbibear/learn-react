import { RouteObject } from "react-router-dom";
import Home from "./routes/Home";


const router: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
];

export default router;