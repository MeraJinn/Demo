import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import HeroElements from "../components/HeroSection";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroElements />
    </>
  );
};

export default Home;
