import About from "./about/About";
import Hero from "./hero/Hero";
import React from "react";
import Projects from "./projects/Projects";
import NavBar from "../components/navbar/Navbar";
import Contact from "./contact/Contact";

const Index = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col gap-y-10 bg-bgPrimary">
                <Hero />
                <Projects />
                <About />
                <Contact />
            </div>
        </>
    );
};

export default Index;
