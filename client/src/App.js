import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing CSS
import "./App.css";

//importing redux
import { Provider } from "react-redux";
import store from "./store";

//Components
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/layout/Footer";
import NavbarItems from "./components/layout/NavbarItems";
//AboutUs
//Book Now
//Merch Store
//Footer

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavbarItems />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
