import React from "react";

import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import { lazy, Suspense } from "react";

// import { useState } from "react";

const Home = lazy(() => import("./Pages/Home"));
// const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <Router>
      <AppSection>
        <GlobalStyle />
        <Suspense fallback={null}>
          <Home />
          {/* <Footer /> */}
        </Suspense>
      </AppSection>
    </Router>
  );
}

export default App;

const AppSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */

  @media screen and (max-width: 1024px) {
    /* display: block; */
  }
`;
