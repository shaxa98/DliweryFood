import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>home</li>
        <li className={menu === "menu" ? "active" : ""}>menu</li>
        <li className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
        <li className={menu === "contact us" ? "active" : ""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <din className="dot"></din>
        </div>
        <button>sing in</button>
      </div>
    </div>
  );
}

export default Navbar;
