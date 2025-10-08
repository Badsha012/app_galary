
import { createBrowserRouter } from "react-router";


import Root from '../RootLayout/Root.jsx';
import Home from "../Pages/Home.jsx";
import App from "../App.jsx";
import Installion from "../Pages/Installion.jsx";
import Apps from "../Pages/Apps.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Error from "../Pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",

    element:<Root></Root>,
    errorElement:<Error></Error>,
    hydrateFallbackElement:<p>Loading...</p>,

    children:[
        {
        index:true,
        loader: () => fetch('./appsHomepage.json'),
        element:<Home></Home>

    },
    {
        path:"/app",
        loader:() =>fetch('./allappsdata.json'),
        element:<Apps></Apps>
    },

    {
        path:"/install",
        element:<Installion></Installion>
    }
]
  },
  // {
  //   path:'*',
  //   element:<ErrorPage></ErrorPage>

  // }

 
]);




export default router;