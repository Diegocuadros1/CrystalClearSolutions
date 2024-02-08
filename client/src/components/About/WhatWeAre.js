import React, { Fragment } from "react";

const WhatWeAre = () => {
  const indent = {
    textIndent: "30px",
  };
  return (
    <Fragment>
      <div className="text-area">
        <h1>What We Are</h1>
        <p style={indent}>
          {" "}
          Crystal Clear Solutions is more than just a window cleaning company;
          it's a local venture rooted in community pride and driven by the
          ambition of students who are passionate about creating a difference.
          Established in 2022, by just Diego, a high schooler at the time,
          started with just a brush and squeegee with the goal to make enough
          money to pay for gas. Now we have a small team composed of local
          students from Long Beach - all of which are freshmen at USC, CSULB,
          and LMU. With our growth, we have embraced the cutting-edge
          technologies such as the Water Fed Pole System to provide guaranteed
          efficient, eco-friendly, and streak-free window cleaning solutions. We
          spend our free time coming together to bring the light into your home.
          By choosing us, you're not just getting clean windows; you're
          supporting the growth and development of young individuals in our
          community, one window at a time.
        </p>
      </div>

      <div className="image whatweare"></div>
    </Fragment>
  );
};

export default WhatWeAre;
