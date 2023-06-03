import About from "./about/About";
import Hero from "./hero/Hero";
import React from "react";
import Projects from "./projects/Projects";
import NavBar from "../components/navbar/Navbar";
import Contact from "./contact/Contact";

const Index = () => {
  return (
    <div className="bg-bgPrimary">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
