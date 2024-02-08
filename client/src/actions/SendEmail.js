import axios from "axios";
import { setAlert } from "./alerts";
import { URL } from "../info";

export const sendEmail =
  (formData, edit = false) =>
  async (dispatch) => {
    console.log(JSON.stringify(formData));
    try {
      //setting header
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      console.log("testing 1");

      //sending email from backend
      await axios.post(`${URL}/api/connect`, formData, config);

      console.log("TESTING 2");

      dispatch(setAlert("Message has been sent!", "success"));

      console.log("testing 3");
    } catch (err) {
      const errors = err.response.data.errors;

      console.log(err.response);

      //show error inputed
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
