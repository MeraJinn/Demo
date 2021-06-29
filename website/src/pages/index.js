import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import HeroElements from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/services";
import { auth } from "../firebase";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/data";
import { Login, SignUp } from "../Auth/authForms";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [User, setUser] = useState(null);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User Logged In ...
        console.log(authUser);
        setUser(authUser);
      } else {
        //user Logged Out ...
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [User]);

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        openSignIn={openSignIn}
        openSignUp={openSignUp}
        setOpenSignUp={setOpenSignUp}
        setopenSignIn={setOpenSignIn}
        User={User}
      />
      <Navbar
        toggle={toggle}
        User={User}
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
