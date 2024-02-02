import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { sendEmail } from "../../actions/SendEmail";
import { connect } from "react-redux";

const ConnectForm = ({ sendEmail }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const { name, email, address, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  return (
    <div className="home-form">
      <div className="form-area">
        <form className="connect-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            required
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            placeholder="Home Address / City or Zip"
            name="address"
            value={address}
            onChange={(e) => onChange(e)}
          />
          <textarea
            placeholder="Write your message"
            name="message"
            required
            value={message}
            onChange={(e) => onChange(e)}
          ></textarea>
          <button type="submit" onSubmit={(e) => onSubmit(e)} className="btn">
            Connect With Us!!
          </button>
        </form>
      </div>
      <div className="form-desc">
        <div className="bubble">
          <p>Connect With Us</p>
          <p>
            <strong>OR</strong>
          </p>
          <p>
            <Link className="connect-link" to="/book">
              Book Now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

ConnectForm.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(null, { sendEmail })(ConnectForm);
