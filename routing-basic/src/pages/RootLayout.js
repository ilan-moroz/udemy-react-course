import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

const RootLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default RootLayout;
