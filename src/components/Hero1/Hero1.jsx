import React, { useState } from "react";
import sareeModel from "../Assets/sareeModel.png";
import "./Hero1.css";

const Hero1 = () => {
  return (
    <>
      <div className="hero" style={{marginTop:'110px'}}>
        <div className="hero-text">
          <h1>
             <span className="saree-store">Saloni bird net & spike feeting service</span>
          </h1>
          <p>Contact Us : 93545 29471/76340 89632.</p>
        </div>
        {/* <div className="hero-image" style={{marginLeft:'30px'}}>
          <img src="https://www.shutterstock.com/image-photo/pigeon-outside-protection-net-apartment-600nw-1862361715.jpg" style={{ height: "100%" }} alt="" />
        </div> */}
      </div>
    
    </>
  );
};

export default Hero1;
