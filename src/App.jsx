import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { NextUIProvider } from "@nextui-org/react";
import AppLayout from "./Applayout";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Searched from "./Components/Searched";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/top-rated/:id",
          element: <Details type="topRated" />,
        },
        {
          path: "/high-reviews/:id",
          element: <Details type="highReviews" />,
        },
        {
          path: "/searched/",
          element: <Searched />,
        },
      ],
    },
  ]);

  return (
    <>
      {/* Wrap NextUIProvider at the root of your app */}
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </>
  );
}

export default App;
