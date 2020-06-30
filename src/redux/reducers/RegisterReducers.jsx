import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions";
  
export const registerState = {
    isRegistering: false,
    isRegistered: false,
    error: "",
  };
  
  export const RegisterReducers = (state = registerState, action) => {
    switch (action.type) {
      case REGISTER_START:
        return {
          ...state,
          isRegistering: true,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isRegistering: false,
          isRegistered: true,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  