import usersReducer from "./usersReducer.js";
import { combineReducers } from "redux";

const reducers = combineReducers({
    users: usersReducer
});

export default reducers;