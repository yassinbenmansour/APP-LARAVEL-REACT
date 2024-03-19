import {createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Layout from "../Layouts/Layout";

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children:[
            { 
                path:"/",
                element: <Home/>
            },
            { 
                path:"*",
                element: <NotFound/>
            },
            { 
                path:"/Login",
                element: <Login/>
            },
            { 
                path:"/Register",
                element: <Register/>
            },
        ]
    }
]);

export default Router;