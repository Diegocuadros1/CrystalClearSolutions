import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const BookNow = () => {
  return (
    <Fragment>
      <div className="booknow">
        <Navbar />
        <form className="book-form">
          <h1 className="book-title">Book Now!!</h1>
          <div className="name-email">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="form-input"
              type="text"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="date-time">
            <p>Pick a date and time you would like!</p>
            <input
              className="form-input"
              type="date"
              placeholder="Date"
              name="date"
              required
            />
            <input
              className="form-input time"
              type="time"
              placeholder="Time"
              name="date"
              required
            />
          </div>
          <div className="location-message">
            <div className="location">
              <p>
                Your Location <br />
                (Only available in LA and Orange County)
              </p>
              <input
                className="form-input"
                type="text"
                placeholder="Address"
                name="address"
                required
              />
              <input
                className="form-input"
                type="text"
                placeholder="City/Zip"
                name="zip"
                required
              />
            </div>
            <div className="message">
              <p>Describe the Service Needed</p>
              <textarea
                className="textarea"
                name="message"
                placeholder="Description of Service Needed"
                required
              />
            </div>
          </div>
          <input className="btn btn-book" type="submit" value="Book Now!!" />
        </form>
      </div>
      <Footer />
    </Fragment>
  );
};

export default BookNow;
