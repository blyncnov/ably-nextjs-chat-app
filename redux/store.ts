import { createStore } from "redux";

// Import Reducers
import RootReducer from "./reducers/rootReducers";

// Create Store
export const store = createStore(RootReducer);

export default store;
