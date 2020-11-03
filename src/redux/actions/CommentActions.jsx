import { AxiosWithAuth } from "../../utils";

export const COMMENT_START = "COMMENT_START";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";
export const COMMENT_FAIL = "COMMENT_FAIL";

export const postComment = (payload) => async (dispatch) => {
  dispatch({ type: COMMENT_START });
  try {
    const res = await AxiosWithAuth().post(":id/comments", payload.values);
    dispatch({ type: COMMENT_SUCCESS, payload: res.data });
    payload.props.history.push("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: COMMENT_FAIL, payload: error });
  }
};