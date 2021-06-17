import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import HeroElements from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/services";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
    </>
  );
};

export default Home;
