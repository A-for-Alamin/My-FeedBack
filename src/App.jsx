import "./App.css";
import Header from "./Components/Header";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      {/* Wrap NextUIProvider at the root of your app */}
      <NextUIProvider>
        <Header />
      </NextUIProvider>
    </>
  );
}

export default App;
