import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="site-navbar">
      <Link className="site-title-container" to={"/"}>
        <p className="site-title pt1">GAME</p>
        <p className="site-title pt2">HUB</p>
      </Link>
    </nav>
  );
};

export default NavBar;
