import { combineReducers } from "redux";
import { reducer as temperature } from "./reducer";

export default combineReducers({
	temperature,
});
