import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuid } from "uuid"; //getting random id

//dispatch: thunk middleware
export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    //creating random id for alert
    const id = uuid();

    dispatch({
      type: SET_ALERT,
      payload: {
        id,
        msg,
        alertType,
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      timeout
    ); //5000 = 5 seconds
  };

export const removeAlert = (alertId) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    payload: alertId,
  });
};
