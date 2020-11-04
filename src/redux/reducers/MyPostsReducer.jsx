import {
    GET_MY_POSTS_START,
    GET_MY_POSTS_SUCCESS,
    GET_MY_POSTS_FAIL,
} from "../actions";
  
export const myPostState = {
    posts: [],
    isFetching: false,
    isFetched: false,
    error: ""
  };
  
export const MyPostReducers = (state = myPostState, action) => {
    switch (action.type) {
      case GET_MY_POSTS_START:
        return {
          ...state,
          isFetching: true,
          isFetched: false,
        };
      case GET_MY_POSTS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isFetched: true,
          posts: action.payload,
        };
      case GET_MY_POSTS_FAIL:
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
  