import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "animate.css";

const NavbarItems = () => {
  // Setting the menu click
  const [showMenu, setShowMenu] = useState(false);

  //setting up the animation
  const [isAnimating, setIsAnimating] = useState(false);

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
    //if Menu is hidden
    if (!showMenu) {
      setShowMenu(true); //sets the show compoenent to true when the button is clicked
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setShowMenu(false);
        setIsAnimating(false);
      }, 500); //timeout matches the duration of the animation
    }
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

  const renderPhoneMenu = showMenu || isAnimating;

  const PhoneMenu = () => {
    return (
      <div
        className={`menu animate__animated ${
          isAnimating ? "animate__slideOutUp" : "animate__slideInDown"
        }`}
        style={{
          animationDuration: "0.5s",
          pointerEvents: showMenu ? "auto" : "none",
        }}
      >
        <Link className="nav-links" to="/" onClick={handleClick}>
          Home
        </Link>
        <Link className="nav-links" to="/about" onClick={handleClick}>
          About
        </Link>
        <Link className="nav-links" to="/book" onClick={handleClick}>
          Book Online
        </Link>
        <Link className="nav-links" to="/store" onClick={handleClick}>
          Crystal Clear Gear
        </Link>
        <div className="school-item">
          <p>
            <i>Run by proud Students of</i>
          </p>
          <div className="schools">
            <div className="school school-lmu" />
            <div className="school school-usc" />
            <div className="school school-csulb" />
          </div>
        </div>
      </div>
    );
  };

  const PhoneNav = () => {
    return (
      <>
        <div className="navbar-list phone-nav">
          <Link to="/">
            <div className="logo" />
          </Link>
          <button className="hamburger-menu" onClick={(e) => handleClick(e)}>
            {showMenu ? <FaTimes /> : <FaBars />}
            {/* <FaBars className="bars" /> */}
          </button>
        </div>
        <div>{renderPhoneMenu && <PhoneMenu />}</div>
      </>
    );
  };

  return <>{navbar ? <PhoneNav /> : <DesktopNav />}</>;
};

export default NavbarItems;
