import userConstants from "../constants/userConstants";
import * as userService from "../services/userService";

const loginRequest = (username, password) => {
  return (dispatch) => {
    userService.login(username, password).then((data) => {
      if (data.status == "Success") {
        return dispatch({ type: userConstants.LOGIN_SUCCESS, payload: data });
      }
    });
  };
};

export { loginRequest };
