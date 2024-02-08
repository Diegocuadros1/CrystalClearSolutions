import React, { Fragment } from "react";

const ThePoint = () => {
  const indent = {
    textIndent: "30px",
  };
  return (
    <Fragment>
      <div className="image thepoint"></div>
      <div className="text-area">
        <h1>What is the point in Window Cleaning</h1>
        <p style={indent}>
          {" "}
          It's imperative to get your windows cleaned whether it's
          professionally or DIY. Cleaning isn't just for the aesthetic appeal,
          but for the health and longevity of the window. As someone who's
          cleaned hundreds of houses, I’ve seen the consequences of windows that
          aren't regularly cleaned firsthand. ‍<br />
          <br />- <strong>Discoloration:</strong> Untouched grit and dirt leads
          to permanent window discoloration. Expensive window replacement is the
          only way to fix it.
          <br />
          <br /> <strong>- Leaks, Cracks, and Reduced Window Quality:</strong>‍
          Windows are made to protect against air, water, and sound. Over time
          they can eventually break at the seam which can lead to water and
          debris leaks. ‍- Curb Appeal: Unkempt windows can result in a lower
          home value, not only affecting your value, but your neighbors homes as
          well.
        </p>
      </div>
    </Fragment>
  );
};

export default ThePoint;
