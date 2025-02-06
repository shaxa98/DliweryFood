import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          classNaimport React, { useContext, useState} from "react";
          import "./Navbar.css";
          import { assets } from "../assets/assets";
          import { Link, useNavigate } from "react-router-dom";
          import { StoreContext } from "./../context/StoreContext";
          
          const Navbar = ({ setShowLogin }) => {
            const [menu, setMenu] = useState("home");
            const [showDropdown, setShowDropdown] = useState(false); // For showing the dropdown
          
            // Get token and other values from context
            const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
            const navigate = useNavigate();
          
            // Logout function
            const logout = () => {
              localStorage.removeItem("token");
              setToken("");
              navigate("/");
            };
          
          
            return (
              <div className="navbar">
                <Link to="/">
                  <img src={assets.logo} alt="" className="logo" />
                </Link>
                <ul className="navbar-menu">
                  <Link
                    to="/"
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}
                  >
                    home
                  </Link>
                  <a
                    href="#explore-menu"
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                  >
                    menu
                  </a>
                  <a
                    href="#app-download"
                    onClick={() => setMenu("mobile-app")}
                    className={menu === "mobile-app" ? "active" : ""}
                  >
                    mobile-app
                  </a>
                  <a
                    href="#footer"
                    onClick={() => setMenu("contact-us")}
                    className={menu === "contact-us" ? "active" : ""}
                  >
                    contact-us
                  </a>
                </ul>
                <div className="navbar-right">
                  <img src={assets.search_icon} alt="" />
                  <div className="navbar-search-icon">
                    <Link to="/cart">
                      <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                  </div>
          
                  {!token ?(<button  onClick={()=>setShowLogin(true)}>sign in</button>):
                   <div className='navbar-profile'><img src={assets.profile_icon} alt="" />
                  <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li><hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                  </div>
                   }
          
                </div>
              </div>
            );
          };
          
          export default Navbar;
          me={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sing in</button>
      </div>
    </div>
  );
}

export default Navbar;
