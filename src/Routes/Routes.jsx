import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root.jsx";
import Home from "../Pages/Home.jsx";
import App from "../App.jsx";
import Installion from "../Pages/Installion.jsx";
import Apps from "../Pages/Apps.jsx";
import Error from "../Pages/Error.jsx";
import AppDetails from "../Pages/AppDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        loader: () => fetch("./appsHomepage.json"),
        element: <Home />,
      },
      {
        path: "/app",
        loader: () => fetch("./allappsdata.json"),
        element: <Apps />,
      },
      {
        path: "/install",
        loader: () => fetch("./allappsdata.json"),
        element: <Installion />,
      },
    ],
  },
  {
    path: "/apps/:id",
    element: <AppDetails />, 
    loader: async ({ params }) => { 
      const res = await fetch("./allappsdata.json");
      const data = await res.json();
      return data.find((app) => app.id === parseInt(params.id));
    },
  },
]);

export default router;
