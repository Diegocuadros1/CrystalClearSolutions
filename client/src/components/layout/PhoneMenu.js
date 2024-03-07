import React from "react";
import { Link } from "react-router-dom";

const PhoneMenu = () => {
  return (
    <div className="menu">
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
      <div className="school-item">
        <p>Run by proud Students of</p>
        <div className="schools">
          <div className="school-lmu" />
          <div className="school-usc" />
          <div className="school-csulb" />
        </div>
      </div>
    </div>
  );
};

export default PhoneMenu;
