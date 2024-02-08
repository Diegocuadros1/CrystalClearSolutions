import axios from "axios";
import { setAlert } from "./alerts";
import { URL } from "../info";

export const sendEmail =
  (formData, edit = false) =>
  async (dispatch) => {
    try {
      //setting header
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //sending email from backend
      await axios.post(`${URL}/api/connect`, formData, config);

      dispatch(setAlert("Message has been sent!", "success"));
    } catch (err) {
      const errors = err.response.data.errors;

      console.log(err.response);

      //show error inputed
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
