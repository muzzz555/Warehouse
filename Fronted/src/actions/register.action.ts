import { history } from "../index"
import {
  OK,
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  server,
} from "../Constants";
import { User } from "../types/user.type";
import { httpClient } from "../utils/httpclient";

// parameter payload send to reducer   rxaction
export const setRegisterFetchingToState = () => ({
  type: REGISTER_FETCHING,
});

export const setRegisterSuccessToState = (payload: any) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setRegisterFailedToState = () => ({
  type: REGISTER_FAILED,
});

// dispatch is callback    redux not use asynchronize =>synchronize


export const register = (user: User, navigate: any) => {

    
    return async (dispatch: any) => {
      try {
      //begin connecting...
      dispatch(setRegisterFetchingToState());  

      //connect
      const result = await httpClient.post(server.REGISTER_URL, user);
      if (result.data.result === OK) {

        setTimeout(() => {
          dispatch(setRegisterSuccessToState(result.data));
          alert("Register Success")
          navigate("/login");          
        }, 2000);

      } else {
        dispatch(setRegisterFailedToState());
      }
      


      } catch(error) {
        //error
        dispatch(setRegisterFailedToState());
      }

    }
};
