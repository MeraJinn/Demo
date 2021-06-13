import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
