import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="home" smooth={true} duration={600}>
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about" smooth={true} duration={600}>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Works" smooth={true} duration={600}>
              Works
            </NavLinks>
          </NavItem>
          {/* <NavItem>
            <NavLinks to="Contact" smooth={true} duration={600}>
              Contact
            </NavLinks>
          </NavItem> */}
          <NavBtn>
            <NavBtnLink to="Contact" smooth={true} duration={600}>
              Contact
            </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
