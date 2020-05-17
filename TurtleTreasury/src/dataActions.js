import {
    USER,
    RESET_DATA
  } from "./types";
  
  export const user = (user) => (dispatch) => {
    dispatch({ type: USER, payload: user });
  };
  
  // Resets all data to default values
  export const resetData = () => (dispatch) => {
    dispatch({ type: RESET_DATA });
  };
  
  