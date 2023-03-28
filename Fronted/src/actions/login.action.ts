import { history } from "../index";
import {
  OK,
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  server,
  TOKEN,
  LOGOUT,
} from "../Constants";
import { User } from "../types/user.type";
import { httpClient } from "../utils/httpclient";
import { LoginResult } from "../types/authen.type";

// parameter payload send to reducer   rxaction
export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = () => ({
  type: LOGIN_FAILED,
});

export const setLogoutToState = () => ({
  type: LOGOUT,
})

// dispatch is callback    redux not use asynchronize =>synchronize

export const login = (user: User, navigate: any) => {
  return async (dispatch: any) => {
    try {
      //begin connecting...
      dispatch(setLoginFetchingToState());

      //connect
      const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);
      if (result.data.result === OK) {
        setTimeout(() => {
          localStorage.setItem(TOKEN, result.data.token!); // token! is frost is mean have token sure  //save localStorage
          dispatch(setLoginSuccessToState(result.data));
          alert("Login Success");
          navigate("/stock");
        }, 1000);
      } else {
        dispatch(setLoginFailedToState());
      }
    } catch (error) {
      //error
      dispatch(setLoginFailedToState());
    }
  };
};

export const restoreLogin = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      dispatch(setLoginSuccessToState({
        result: OK, token, message: "Login success"
      }));
    }
  };
}

export const logout = (navigate: any) => {
  return (dispatch: any) => {
    localStorage.removeItem(TOKEN)
    dispatch(setLogoutToState());
    alert("Logout success")
    navigate("/login");
  }
}