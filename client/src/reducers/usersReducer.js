import userConstants from '../constants/userConstants';
import Cookie from "js-cookie";

let payload = Cookie.get("x-access-token");
const initialState = payload ? { loggedIn: true, payload } : {};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.payload
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}