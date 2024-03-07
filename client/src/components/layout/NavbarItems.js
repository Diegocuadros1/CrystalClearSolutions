import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneMenu from "./PhoneMenu";

const NavbarItems = () => {
  // Setting the menu click
  const [showMenu, setShowMenu] = useState(false);

  // Setting a state where if window length < 768, then its true
  const [navbar, setNavbar] = useState(window.innerWidth < 768);

  useEffect(() => {
    // When the screen is being resized and deciding whether the window is phone or not phone
    function handleResize() {
      setNavbar(window.innerWidth < 768);
    }

    // resizing
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setShowMenu(!showMenu); //sets the show compoenent to true when the button is clicked
  };

  const DesktopNav = () => {
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

  const PhoneNav = () => {
    return (
      <>
        <div className="phone-nav">
          <div className="logo" />
          <button className="hamburger-menu" onClick={(e) => handleClick(e)} />
        </div>
        {showMenu && <PhoneMenu />}
      </>
    );
  };

  return <>{navbar ? <PhoneNav /> : <DesktopNav />}</>;
};

export default NavbarItems;
