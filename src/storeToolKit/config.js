import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { quanLiPhimReducer } from "./quanLiPhim";

import { quanLyRapReducer } from "./quanLyRap";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung";
import { quanLiDatVeReducer } from "./quanLiDatVe";
const rootReducer = combineReducers({
  quanLiPhimReducer,
  quanLyRapReducer,
  quanLyNguoiDungReducer,
  quanLiDatVeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
