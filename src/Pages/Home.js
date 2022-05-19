import React, { useState } from "react";
import styled from "styled-components";
// Sections
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/header/Navbar";
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import Works from "../Sections/Works/Works";
import Contact from "../Sections/Contact/Contact";
import Footer from "../Components/Footer/Footer";

// import Skills from "../Sections/Skills/Skills";

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--sub-main-background);

  /* overflow: hidden; */
  /* background-color: black; */
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const style = { backgroundImage: `url(${NewYork})` };

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Works />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
