import React from "react";
import Nav from "../layouts/Nav/Nav";
import Introduction from "./Introduction/Introduction";
import About from "./About/About";
import Benefits from "./Benefits/Benefits";
import Courses from "./Courses/Courses";
import Staff from "./Staff/Staff";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
function Home() {
  return (
    <main>
      <Introduction />
      <About />
      <Benefits />
      <Courses />
      <Staff />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
