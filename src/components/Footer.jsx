import React from "react";
import Img1 from "../img/io.png";

function Footer() {
  return (
    <div className="body">
      {/* <h3 className="title-txt"></h3> */}

      <p className="footer">
        <img className="footer-img" src={Img1} alt="img"></img>
        If you have further questions, feel free to get in touch with us at
        <strong>oscillationist@proton.me</strong>
        <img className="footer-img" src={Img1} alt="img"></img>
      </p>
    </div>
  );
}

export default Footer;
