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
import Alert from "./components/layout/Alert";
import About from "./components/About/About";
//AboutUs
//Book Now
//Merch Store
//Footer

// store={store}
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavbarItems />
          <Alert />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
