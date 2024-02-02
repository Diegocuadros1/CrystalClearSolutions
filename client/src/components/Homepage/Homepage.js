import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Services from "./Services";
import ConnectForm from "./ConnectForm";
import Footer from "../layout/Footer";
import NavbarItems from "../layout/NavbarItems";

const Homepage = () => {
  return (
    <div className="homepage-start">
      <Navbar />
      <div className="intro">
        <div className="ccs" />
        <div className="intro-p">
          <p className="text-main">
            Cleaning Windows, Gutters, and Solar Panels in Long Beach.
            Professionally Student Owned and Operated. Competitive Pricing .
            Book Now!
          </p>
          <p className="text-main-2">Fully Licensed and Insured</p>
        </div>
      </div>
      <Services />
      <ConnectForm />
      <Footer />
    </div>
  );
};

export default Homepage;
