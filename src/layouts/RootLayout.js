import React from "react";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../layouts/Footer/Footer";
function RootLayout() {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </main>
  );
}

export default RootLayout;
