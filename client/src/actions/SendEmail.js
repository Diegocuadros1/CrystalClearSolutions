import axios from "axios";
import { setAlert } from "./alerts";
import { SEND_EMAIL } from "./types";
import { response } from "express";

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
      const res = await axios.post("/api/connect", formData, config);

      dispatch(setAlert("Message has been sent!", "success"));
    } catch (err) {
      const errors = err.response.data.errors;

      //show error inputed
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
