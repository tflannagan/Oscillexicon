import React from "react";
import Img1 from "../img/bg10.png";
import Img2 from "../img/bg3.png";

function Header() {
  return (
    <div className="App">
      {/* <img className="image-title" src={Img1} alt="img" /> */}
      <h1 className="App-header">
        <strong>Oscillationism</strong>
      </h1>
      <a href="https://tflannagan.github.io/AI-Art-Gallery/">
        {/* <img className="image-title" src={Img1} alt="img" /> */}
      </a>
      {/* <p1>(theory)</p1> */}
    </div>
  );
}

export default Header;
