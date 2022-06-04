import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Div>
      <Navbar />
      <About />
      <Footer />
    </Div>
  );
};

export default App;
