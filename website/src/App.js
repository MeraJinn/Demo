import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
