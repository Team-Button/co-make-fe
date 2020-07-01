import { AxiosWithAuth } from "../../utils";

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const GET_POST_START = "GET_POST_START";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAIL = "ADD_POST_FAIL";

export const EDIT_POST_START = "EDIT_POST_START";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAIL = "EDIT_POST_FAIL";

export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAIL = "DELETE_POST_FAIL";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POSTS_START });
  try {
    const res = await AxiosWithAuth().get("/posts");
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_POSTS_FAIL, payload: error });
  }
};

export const getPostById = (id) => async (dispatch) => {
  dispatch({ type: GET_POST_START });
  try {
    const res = await AxiosWithAuth().get(`/posts/${id}`);
    dispatch({ type: GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_POST_FAIL, payload: error });
  }
};

export const addPost = (payload) => async (dispatch) => {
  dispatch({ type: ADD_POST_START });
  try {
    const res = await AxiosWithAuth().post("/posts", payload.values);
    dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_POST_FAIL, payload: error });
  }
};

export const editPost = (id, payload) => async (dispatch) => {
  dispatch({ type: EDIT_POST_START });
  try {
    const res = await AxiosWithAuth().edit(`/posts/${id}`, payload.values);
    dispatch({ type: EDIT_POST_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_POST_FAIL, payload: error });
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: DELETE_POST_START });
  try {
    await AxiosWithAuth().delete(`/posts/${id}`);
    dispatch({ type: DELETE_POST_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: DELETE_POST_FAIL, payload: error });
  }
};
