import { AxiosWithAuth } from "../../utils";

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const GET_POST_START = "GET_POSTS_START";
export const GET_POST_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POST_FAIL = "GET_POSTS_FAIL";

export const EDIT_POST_START = "EDIT_POSTS_START";
export const EDIT_POST_SUCCESS = "EDIT_POSTS_SUCCESS";
export const EDIT_POST_FAIL = "EDIT_POSTS_FAIL";

export const DELETE_POST_START = "DELETE_POSTS_START";
export const DELETE_POST_SUCCESS = "DELETE_POSTS_SUCCESS";
export const DELETE_POST_FAIL = "DELETE_POSTS_FAIL";

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

export const editPost = (id, payload) => async (dispatch) => {
  dispatch({ type: EDIT_POST_START });
  try {
    const res = await AxiosWithAuth().get(`/posts/${id}`, payload);
    dispatch({ type: EDIT_POST_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_POST_FAIL, payload: error });
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: EDIT_POST_START });
  try {
    await AxiosWithAuth().get(`/posts/${id}`);
    dispatch({ type: EDIT_POST_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_POST_FAIL, payload: error });
  }
};
