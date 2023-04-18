import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function RootLayout() {
  return (
    <main>
      <Nav />
      <Outlet />
      <ScrollRestoration />
    </main>
  );
}

export default RootLayout;
