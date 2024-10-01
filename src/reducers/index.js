import { productsReducer } from "./task-reducers";
import { combineReducers } from "redux";

var allReducers = combineReducers({
  products: productsReducer,
});
export default allReducers;
