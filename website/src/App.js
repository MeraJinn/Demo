import React from "react";
import "./styles/main.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
};

export default App;
