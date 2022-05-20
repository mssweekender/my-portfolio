import React, { useState } from "react";
import styled from "styled-components";
// Sections
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import Works from "../Sections/Works/Works";
import Contact from "../Sections/Contact/Contact";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/header/Navbar";
import Footer from "../Components/Footer/Footer";

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--sub-main-background);
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
