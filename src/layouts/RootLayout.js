import React from "react";
import Nav from "../Home/Nav/Nav";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}

export default RootLayout;
