import { AxiosWithAuth } from "../../utils";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const register = (payload) => async (dispatch) => {
  dispatch({ type: REGISTER_START });
  try {
    const res = await AxiosWithAuth().post("/auth/register", payload);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};
