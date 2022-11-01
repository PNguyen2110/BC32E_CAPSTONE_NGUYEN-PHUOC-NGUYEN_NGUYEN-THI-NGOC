import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLiDatVeService } from "../../services/quanLiDatVeService";
const initialState = {};
export const { reducer: quanLiDatVeReducer, actions: quanLiDatVeAction } =
  createSlice({
    name: "quanLiDatVe",
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
  });

export const taoLichChieu = createAsyncThunk(
  "quanLiDatVe/taoLichChieu",
  async (data, {}) => {
    try {
      const result = await quanLiDatVeService.taoLichChieu(data);
      alert(result.data.content);
    } catch (err) {
      console.log(err.response.data);
    }
  }
);
