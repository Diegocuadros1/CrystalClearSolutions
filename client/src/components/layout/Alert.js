import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeAlert } from "../../actions/alerts";

const Alert = ({ alerts, removeAlert }) => (
  <div className="popup-main">
    {alerts !== null &&
      alerts.length > 0 &&
      alerts.map((alert) => (
        //loops through alerts and outputs the message with matching id
        <div key={alert.id} className={`popup popup-${alert.alertType}`}>
          <h1>
            <strong>{alert.msg}</strong>
          </h1>
          <button className="close-btn" onClick={(e) => removeAlert(alert.id)}>
            Close
          </button>
        </div>
      ))}
  </div>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
