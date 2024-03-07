import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Importing CSS
import "./App.css";

//importing redux
import { Provider } from "react-redux";
import store from "./store";

//Components
import Homepage from "./components/Homepage/Homepage";
import NavbarItems from "./components/layout/NavbarItems";
import Alert from "./components/layout/Alert";
import About from "./components/About/About";
import BookNow from "./components/BookNow/BookNow";
import MerchStore from "./components/MerchStore/MerchStore";

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
            <Route path="/book" element={<BookNow />} />
            <Route path="/store" element={<MerchStore />} />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
