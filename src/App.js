import React from "react";
import Preloader from "./components/preloader/Preloader";
import Hero from "./pages/hero/Hero";
import Projects from "./pages/projects/Projects";
import NavBar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import AboutPanel from "./pages/about/AboutPanel";

function App() {
    return (
        <React.Fragment>
            <Preloader />
            <NavBar />
                <Hero />
                <Projects />
                <AboutPanel />
                <Contact />
        </React.Fragment>
    );
}

export default App;
