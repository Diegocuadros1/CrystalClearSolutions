import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarItems />
      <div className="nav-bottom">
        <div>
          <Link to="/">
            <div className="logo" />
          </Link>
        </div>
        <div className="school-item">
          <p>Run by proud Students of</p>
          <div className="schools">
            <div className="school-lmu" />
            <div className="school-usc" />
            <div className="school-csulb" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
