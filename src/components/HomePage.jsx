import React from "react";

import Header from "./Header";
import Passage from "./Passage";
import Body from "./Body";
import Footer from "./Footer";

function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <Header />

      <Passage />
      <button className="link-button" onClick={() => onNavigate("second-page")}>
        The Ten Pillars
      </button>
      <Body />
      <Footer />
    </div>
  );
}

export default HomePage;
