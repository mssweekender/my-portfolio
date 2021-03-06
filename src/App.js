import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle";
import Home from "./Pages/Home";
// import WorkDetail from "./Pages/WorkDetail";
import Work from "./Sections/Works/Work";

function App() {
  return (
    <AppSection>
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/works/:id" element={<Work />} />
      </Routes>
    </AppSection>
  );
}

export default App;
const AppSection = styled.div`
  font-family: var(--japanese);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative;
  overflow: hidden; */
  /* background-color: black; */

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
