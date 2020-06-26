import { AxiosWithAuth } from "../../utils";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const postLogin = (payload) => async (dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const res = await AxiosWithAuth().post("/auth/login", payload.values);
    console.log(payload.props)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("welcomemsg", res.data.message);
    payload.props.history.push("/dashboard");
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};
