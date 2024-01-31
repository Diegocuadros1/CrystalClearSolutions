import React from "react";

const Services = () => {
  return (
    <>
      <p className="title-services">Our Services</p>
      <div className="gradient-line"></div>
      <div className="services-box">
        <div className="services">
          <h4>Solar Panels</h4>
          <p>
            Meticulous solar panel cleaning to enhance the efficiency and
            lifespan of your solar energy system
          </p>
        </div>
        <div className="services">
          <h4>Window Cleaning</h4>
          <p>
            ensure your property remains well-maintained and protected from
            potential water damage.
          </p>
        </div>
        <div className="services">
          <h4>Gutter Cleaning</h4>
          <p>
            We offer a versatile approach to window cleaning, catering to
            storefronts, commercial properties, and residential clients with
            flexible options.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
