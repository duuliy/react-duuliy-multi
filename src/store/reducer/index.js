

import {combineReducers} from "redux";
import todoList from "./todoReducer";
import fiterState from "./filtReducer";
 
const todoApp = combineReducers({
	todoList,
	fiterState
});
 
export default todoApp;
