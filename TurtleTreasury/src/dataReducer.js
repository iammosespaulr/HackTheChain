import {
    USER,
    RESET_DATA
  } from "./types";
  
  const initialState = {
    retailProjectData: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
    
      case USER:
        return {
          ...state,
          user: action.payload
        };
     
      case RESET_DATA:
        return {
          ...state,
          retailProjectData: null
        };
      default:
        return state;
    }
  }
  