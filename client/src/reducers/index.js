import { authentication } from "./usersReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  isLoggedIn: authentication,
});

export default reducers;
