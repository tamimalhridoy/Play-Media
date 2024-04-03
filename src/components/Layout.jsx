import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <hr className=" bg-slate-900 border-2" />
      <div className=" flex">
        <Navbar />
        <hr className="border-8   h-screen" />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
