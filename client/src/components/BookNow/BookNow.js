import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { sendBookEmail } from "../../actions/sendEmail";

const BookNow = ({ sendBookEmail }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    address: "",
    zip: "",
    message: "",
  });

  const { name, email, date, time, address, zip, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendBookEmail(formData);
  };

  return (
    <>
      <div className="booknow">
        <Navbar />
        <form className="book-form" onSubmit={(e) => onSubmit(e)}>
          <h1 className="book-title">Book Now!!</h1>
          <div className="name-email">
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="form-input"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="date-time">
            <div className="par">
              <p>Pick a date and time you would like!</p>
              <p>
                <i>Avalible Friday-Sunday 9am - 7pm</i>
              </p>
            </div>
            <input
              className="form-input"
              type="date"
              placeholder="Date"
              name="date"
              value={date}
              onChange={(e) => onChange(e)}
              required
            />
            <input
              className="form-input time"
              type="time"
              placeholder="Time"
              name="time"
              min="9:00"
              max="18:00"
              value={time}
              onChange={(e) => onChange(e)}
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
                value={address}
                onChange={(e) => onChange(e)}
                required
              />
              <input
                className="form-input"
                type="text"
                placeholder="City/Zip"
                name="zip"
                value={zip}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="message">
              <p>Describe the Service Needed</p>
              <textarea
                className="textarea"
                name="message"
                placeholder="Description of Service Needed"
                value={message}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <input className="btn btn-book" type="submit" value="Book Now!!" />
        </form>
      </div>
      <Footer />
    </>
  );
};

BookNow.propTypes = {
  sendBookEmail: PropTypes.func.isRequired,
};

export default connect(null, { sendBookEmail })(BookNow);
