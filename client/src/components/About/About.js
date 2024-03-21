import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

// Sections
import WhatWeAre from "./WhatWeAre";
import OurMission from "./OurMission";
import WhyUs from "./WhyUs";
import ThePoint from "./ThePoint";
import WaterFedPole from "./WaterFedPole";

const About = () => {
  const whatWeAre = useRef(null);
  const ourMission = useRef(null);
  const whyUs = useRef(null);
  const thePoint = useRef(null);
  const waterFedPole = useRef(null);

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <Navbar />
      <h1 className="about-title">About Us</h1>
      <ul className="about-list">
        <li>
          {" "}
          <Link to="#whatweare" onClick={() => scroll(whatWeAre)}>
            Who We Are
          </Link>
        </li>
        <li>
          {" "}
          <Link to="#ourmission" onClick={() => scroll(ourMission)}>
            Our Mission
          </Link>
        </li>
        <li>
          {" "}
          <Link to="#whyus" onClick={() => scroll(whyUs)}>
            Why Choose Us?
          </Link>
        </li>
        <li>
          {" "}
          <Link to="#thepoint" onClick={() => scroll(thePoint)}>
            What is the point in Window Cleaning?
          </Link>
        </li>
        <li>
          {" "}
          <Link to="#waterfedpole" onClick={() => scroll(waterFedPole)}>
            Learn About Our Water Fed Pole System
          </Link>
        </li>
      </ul>
      <section ref={whatWeAre} className="section">
        <WhatWeAre />
      </section>
      <section ref={ourMission} className="section section-2">
        <OurMission />
      </section>
      <section ref={whyUs} className="section">
        <WhyUs />
      </section>
      <section ref={thePoint} className="section section-2">
        <ThePoint />
      </section>
      <section ref={waterFedPole} className="section section-2">
        <WaterFedPole />
      </section>
      <Footer />
    </div>
  );
};

export default About;
