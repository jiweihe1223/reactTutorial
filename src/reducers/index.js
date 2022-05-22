import listReducer from "./listReducer";
import searchReducer from "./searchReducer";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
  list: listReducer,
  search: searchReducer,
});

export default allReducers;
