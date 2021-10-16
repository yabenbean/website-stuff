import { combineReducers } from "redux";

import spinnerReducer from "./reducers/spinner.reducer.js";

export default combineReducers({
  spinner: spinnerReducer,
});
