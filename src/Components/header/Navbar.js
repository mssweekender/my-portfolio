import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElement";

const Navbar = ({ toggle }) => {
  const [section, setSection] = useState("");

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
              smooth={true}
              duration={600}
              style={{
                borderBottom: section === "Home" ? "2px solid #00a8cc" : "",
              }}
              onClick={() => {
                setSection("Home");
              }}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={600}
              style={{
                borderBottom: section === "About" ? "3px solid #00a8cc" : "",
              }}
              onClick={() => {
                setSection("About");
              }}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="Works"
              smooth={true}
              duration={600}
              style={{
                borderBottom: section === "Works" ? "2px solid #00a8cc" : "",
              }}
              onClick={() => {
                setSection("Works");
              }}
            >
              Works
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks
              to="Contact"
              smooth={true}
              duration={600}
              style={{
                borderBottom: section === "Contact" ? "2px solid #00a8cc" : "",
              }}
              onClick={() => {
                setSection("Contact");
              }}
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
