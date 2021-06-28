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
import { Login, SignUp } from "./Auth/authForms";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [User, setUser] = useState(null);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        openSignIn={openSignIn}
        openSignUp={openSignUp}
        setOpenSignUp={setOpenSignUp}
        setopenSignIn={setOpenSignIn}
      />
      <Navbar
        toggle={toggle}
        openSignIn={openSignIn}
        openSignUp={openSignUp}
        setOpenSignUp={setOpenSignUp}
        setopenSignIn={setOpenSignIn}
      />
      <Login
        openSignIn={openSignIn}
        setOpenSignUp={setOpenSignUp}
        setopenSignIn={setOpenSignIn}
      />
      <SignUp openSignUp={openSignUp} setOpenSignUp={setOpenSignUp} />
      <HeroElements />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
