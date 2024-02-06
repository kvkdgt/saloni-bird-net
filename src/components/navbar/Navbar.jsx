import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const updateActive = ()=>{
    if(window.location.pathname == '/'){
      setActive('home')
    }
    if(window.location.pathname == '/product/dryfruit-sweets'){
      setActive('dryfruit-sweets')
      
  }}
  return (
    <div>
      <div className="main-header">
        <div className="subHeader">
        <marquee>
          Welcome to  <b style={{ color: "yellow" }}>Saloni bird net and spike feeting service. </b>
         Contact Us : 93545 29471/76340 89632
        </marquee>
        </div>
        <header>
          <div class="logo">
            <Link to="/">

              <div class="site-name">Saloni bird net & spike feeting service</div>
            </Link>
          </div>
          <div class="option-list">
          <Link to="/"> <span className="options active">Home</span></Link>
            <Link to="/product/gold"><span className="options">Gold</span></Link>
            <Link to="/product/silver"><span className="options">Silver</span></Link>
            <Link to="/product/diamond-jewellery"><span className="options">Diamond</span></Link>
            <Link to="/product/all"><span className="options">More Jewellery</span></Link>
            <Link to="/about"><span className="options">About us</span></Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
