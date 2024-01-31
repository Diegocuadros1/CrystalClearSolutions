import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = () => {
  return (
    <div className="navbar-list">
      <ul>
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/about">
          About
        </Link>
        <Link className="nav-links" to="/book">
          Book Online
        </Link>
        <Link className="nav-links" to="/store">
          Crystal Clear Gear
        </Link>
      </ul>
    </div>
  );
};

export default NavbarItems;
