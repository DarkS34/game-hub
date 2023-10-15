import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { isAuthenticated } from "../AuthService";
import { useAuth } from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="site-navbar">
      <Link className="site-title-container" to={"/"}>
        <p className="site-title pt1">GAME</p>
        <p className="site-title pt2">HUB</p>
      </Link>
      {isAuthenticated(user) ? (
        <button className="logout-btn" onClick={logout}>
          <p>LOGOUT</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="logout-icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#3d6aff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path stroke="#edf2f4" d="M9 12h12l-3 -3" />
            <path stroke="#edf2f4" d="M18 15l3 -3" />
          </svg>
        </button>
      ) : null}
    </nav>
  );
};

export default NavBar;
