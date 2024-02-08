import React, { Fragment } from "react";

const OurMission = () => {
  const indent = {
    textIndent: "30px",
  };
  return (
    <Fragment>
      <div className="image ourmission"></div>
      <div className="text-area">
        <h1>Our Mission</h1>
        <p style={indent}>
          {" "}
          At Crystal Clear Solutions, our mission is simple: to provide
          top-notch window cleaning services while empowering local students. We
          believe that clean, transparent windows not only enhance the aesthetic
          appeal of your home or business but also bring in more natural light,
          creating a healthier and more inviting environment. Additionally, by
          giving students the opportunity to gain practical real world
          experience and financial support, we aim to invest in the future of
          Long Beach.
        </p>
      </div>
    </Fragment>
  );
};

export default OurMission;
