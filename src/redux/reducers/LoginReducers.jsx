import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  
  } from "../actions";
  
  export const loginState = {
    user: {
        name: "",
        id: null,
        token: "",
        message: ""
    },
    isLoggingIn: false,
    isLoggedIn: false,
    error: "",
};
  
  export const LoginReducers = (state = loginState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isLoggedIn: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: true,
          user: {
            ...state.user,
            token: action.payload.token,
            id: action.payload.id,
            message: action.payload.message,
          }
          
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggingIn: false,
          isLoggedIn: false,
          error: action.payload,
        };
      case LOGOUT:
        return {
        ...state,
        isLoggedIn: false,
        user: {
            token: "",
            id:null,
            message: null,
        }
        } 
  
      default:
        return state;
    }
  };
  