import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { quanLiRapService } from "../../services/quanLiRapService";

const initialState = {
  isFetching: false,
  isFetChingCumRap: false,
  thongTinCumRap: [],
  thongTinRap: [],
};
export const { reducer: quanLiRapReducer, actions: quanLiRapAction } =
  createSlice({
    name: "quanLiRap",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(layThongTinHeThongRap.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(layThongTinHeThongRap.fulfilled, (state, action) => {
          state.isFetching = false;
          state.thongTinRap = action.payload;
        })
        .addCase(layThongTinHeThongRap.rejected, (state, action) => {
          state.isFetching = false;
          state.thongTinRap = action.payload;
        })
        //LayThongTinCumRapTheoHeThong
        .addCase(layThongTinCumRapTheoHeThong.pending, (state, action) => {
          state.isFetChingCumRap = true;
        })
        .addCase(layThongTinCumRapTheoHeThong.fulfilled, (state, action) => {
          state.isFetChingCumRap = true;
          state.thongTinCumRap = action.payload;
        })
        .addCase(layThongTinCumRapTheoHeThong.rejected, (state, action) => {
          state.isFetChingCumRap = true;
          state.thongTinCumRap = action.payload;
        });
    },
  });

export const layThongTinHeThongRap = createAsyncThunk(
  "quanLiRap/layThongTinHeThongRap",
  async (data, { rejectWithValue }) => {
    try {
      const result = await quanLiRapService.layThongTinHeThongRap();

      return result.data.content;
    } catch (err) {
      console.log(err.response, data);
      return rejectWithValue(err.response, data);
    }
  }
);
export const layThongTinCumRapTheoHeThong = createAsyncThunk(
  "quanLiRap/ayThongTinCumRapTheoHeThong",
  async (data, { rejectWithValue }) => {
    try {
      const result = await quanLiRapService.layThongTinCumRapTheoHeThong(data);
      console.log("layThongTinCumRapTheoHeThong", result.data.content);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
