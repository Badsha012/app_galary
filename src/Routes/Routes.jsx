

import { createBrowserRouter } from "react-router-dom";
import Root from "../RootLayout/Root.jsx";
import Home from "../Pages/Home.jsx";
import Installion from "../Pages/Installion.jsx";
import Apps from "../Pages/Apps.jsx";
import Error from "../Pages/Error.jsx";

import AppDetail from "../Pages/AppDetail.jsx";
import Contact from "../Pages/Contact.jsx";
import About from "../Pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        loader: () => fetch("/appsHomepage.json"),
        element: <Home />,
      },
      {
        path: "app",
        loader: () => fetch("/allappsdata.json"),
        element: <Apps />,
      },
      {
        path: "install",
        loader: () => fetch("/allappsdata.json"),
        element: <Installion />,
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path:"about",
        element:<About></About>
      }
    ],
  },
  {
    path: "/app/:id",
    element: <AppDetail />,
    loader: async ({ params }) => {
      const res = await fetch("/allappsdata.json");
      const data = await res.json();
      const app = data.find((app) => app.id === parseInt(params.id));
      if (!app) throw new Response();
      return app;
    },
  },
]);

export default router;

