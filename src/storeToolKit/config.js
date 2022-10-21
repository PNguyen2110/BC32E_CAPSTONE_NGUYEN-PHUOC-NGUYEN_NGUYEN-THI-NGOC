import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { quanLiPhimReducer } from "./quanLiPhim";
const rootReducer = combineReducers({
  quanLiPhimReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
