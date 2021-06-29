import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { auth } from "../../firebase";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle, setopenSignIn, User }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          Merajinn
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="discover"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Discover
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="services"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Services
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="dsssdd"
              smooth={true}
              duration={1000}
              spy={true}
              exact="true"
              offset={-80}
            >
              Signup
            </NavLinks>
          </NavItem>
        </NavMenu>

        <NavBtn>
          {User?.displayName ? (
            <NavBtnLink onClick={() => auth.signOut()}>
              {User?.displayName}
            </NavBtnLink>
          ) : (
            <NavBtnLink onClick={() => setopenSignIn(true)}>Sign In</NavBtnLink>
          )}
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
