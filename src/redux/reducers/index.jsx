import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
} from "../actions";

export const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isFetching: false,
  isUpdating: false,
  token: "",
  message: "",
  err: "",
  user: {
    name: "",
  },
  posts: {
    allPosts: [],
  },
  post: {},
  editedPost: {},
};

export const appReducers = (state = initialState, action) => {
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
        token: action.payload.token,
        message: action.payload.message,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        err: action.payload,
      };

    case REGISTER_START:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    case GET_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allPosts: action.payload,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        isFetching: false,
        err: action.payload,
      };

    case GET_POST_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        post: action.payload,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        isFetching: false,
        err: action.payload,
      };

    case EDIT_POST_START:
      return {
        ...state,
        isUpdating: true,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        editedPost: action.payload,
      };
    case EDIT_POST_FAIL:
      return {
        ...state,
        isUpdating: false,
        err: action.payload,
      };

    case DELETE_POST_START:
      return {
        ...state,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};
