import { combineReducers } from "redux";

// All Reducers
import MessageReducer from "./messageReducers";

export const rootReducer = combineReducers({
  ModeReducer: MessageReducer,
});

export default rootReducer;
