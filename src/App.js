import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import Preloader from "./components/preloader/Preloader";

function App() {
    return (
        <div>
            <Preloader />
            <Router>
                <Index />
                <Routes></Routes>
            </Router>
        </div>
    );
}

export default App;
