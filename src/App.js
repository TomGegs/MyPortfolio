import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";

function App() {
  return (
    <div>
      <Router>
        <Index />
        <Routes></Routes>
      </Router>
    </div>
  );
}

export default App;
