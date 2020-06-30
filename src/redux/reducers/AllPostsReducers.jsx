import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,
} from "../actions";
  
  export const allPostState = {
    posts: [],
    isFetching: false,
    isFetched: false,
    error: ""
  };
  
  export const AllPostReducers = (state = allPostState, action) => {
    switch (action.type) {
      case GET_POSTS_START:
        return {
          ...state,
          isFetching: true,
          isFetched: false,
        };
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isFetched: true,
          posts: action.payload,
        };
      case GET_POSTS_FAIL:
        return {
          ...state,
          isFetching: false,
          isFetched:false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  