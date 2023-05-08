import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Prediction from "../components/Prediction";

const Router = createBrowserRouter([ 
    { 
        path: "/", 
        element: <Home />,
        errorElement: <img src = "../img/404.png" alt = "404" />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/prediction",
        element: <Prediction />,
    }
]);

export default Router;