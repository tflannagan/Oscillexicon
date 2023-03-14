import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Passage from "./components/Passage";

import Body from "./components/Body";

function App() {
  return (
    <>
      <Header />
      <Passage />
      <Body />
      <Footer />
    </>
  );
}

export default App;
