import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing CSS
import "./App.css";

//Components
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/Homepage/Homepage";
//AboutUs
//Book Now
//Merch Store
//Footer

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
