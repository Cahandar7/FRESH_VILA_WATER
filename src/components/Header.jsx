import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-h">
        <p>Phone : (+88 - 123456789)</p>
        <p>Opening Hours : Monday To Saturday - 8AM TO 8PM</p>
        <p>KA-62/1, Kuril, Progoti, Canada</p>
      </div>
      <div className="bottom-h">
        <img
          src="https://creativemela.com/themeforest_html/Fresh_Vial/demo/freeshvila/images/logo.png"
          alt="logo"
        />
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact Us</NavLink>
          </li>
        </ul>
        <span>
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-search"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
