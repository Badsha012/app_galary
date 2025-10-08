
import { createBrowserRouter } from "react-router";


import Root from '../RootLayout/Root.jsx';
import Home from "../Pages/Home.jsx";
import App from "../App.jsx";
import Installion from "../Pages/Installion.jsx";
import Apps from "../Pages/Apps.jsx";
const router = createBrowserRouter([
  {
    path: "/",

    element:<Root></Root>,

    children:[
        {
        index:true,
        element:<Home></Home>

    },
    {
        path:"/app",
        element:<Apps></Apps>
    },

    {
        path:"/install",
        element:<Installion></Installion>
    }
]
  },
]);




export default router;