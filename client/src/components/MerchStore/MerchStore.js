import React, { useEffect } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const MerchStore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="merch-store">
        <h1>Coming Soon...</h1>
      </div>
      <Footer />
    </>
  );
};

export default MerchStore;
