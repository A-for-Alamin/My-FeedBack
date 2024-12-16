import "./App.css";
import Home from "./Components/Home";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      {/* Wrap NextUIProvider at the root of your app */}
      <NextUIProvider>
        <Home />
      </NextUIProvider>
    </>
  );
}

export default App;
