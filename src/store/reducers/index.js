import { combineReducers } from "redux";
import { reducer as weather } from "./weatherReducer";

export default combineReducers({
	weather,
});
