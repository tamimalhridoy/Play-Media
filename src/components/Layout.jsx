import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <div className=" flex">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
