import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import AppLayout from "./Applayout";
import Home from "./Components/Home";
import Restaurants from "./Components/Restaurants";

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
          path: "/restaurants",
          element: <Restaurants />,
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
