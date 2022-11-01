import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { quanLiPhimReducer } from "./quanLiPhim";
import { quanLiRapReducer } from "./quanLiRap";
import { quanLiNguoiDungReducer } from "./quanLiNguoiDung";
const rootReducer = combineReducers({
  quanLiPhimReducer,
  quanLiRapReducer,
  quanLiNguoiDungReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
