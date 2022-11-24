import React from "react";
import Img4 from "../img/bg7.png"
import Img5 from "../img/bg6.png"
import Img6 from "../img/bg2.png"
import Img7 from "../img/bg5.png"
import Img8 from "../img/bg.png"

function BannerHeader() {
  
  return (
    <div className="image-parent"  >
    
          <img className="image" src={Img4} alt="img" />
          <img className="image" src={Img5} alt="img" />  
          <img className="image" src={Img6} alt="img" />
          <img className="image" src={Img7} alt="img" />  
          <img className="image" src={Img8} alt="img" />          
    </div>

  );
}

export default BannerHeader;
