import { Outlet } from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
