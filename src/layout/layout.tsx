import { FC } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
export const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className="relative  w-full overflow-hidden top-[109.33px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
