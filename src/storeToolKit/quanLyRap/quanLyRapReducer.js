import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyRapService } from "../../services/quanLyRapService";

const initialState = {
 rapList:[],
 lichChieuMovieDetail:[],
 isFetchingCumRap: false,
 isFetchingCumRapMovieDetail: false,
};

export const { reducer: quanLyRapReducer, actions: quanLyRapActions } =
  createSlice({
    name: "quanLyRap",
    initialState,


    reducers: {

    },

    extraReducers: (builder) => {
      builder
          //get rap chieu
          .addCase(getRapMovieList.pending, (state, action) => {
            state.isFetchingCumRap = true;
          })
          .addCase(getRapMovieList.fulfilled, (state, action) => {
            state.isFetchingCumRap = false;
            state.rapList = action.payload;
          })
          .addCase(getRapMovieList.rejected, (state, action) => {
            state.isFetchingCumRap = false;
            state.rapList = action.payload;
          })
          //get rap chieu detail
          .addCase(getLichChieuMovieDetail.pending, (state, action) => {
            state.isFetchingCumRapMovieDetail = true;
          })
          .addCase(getLichChieuMovieDetail.fulfilled, (state, action) => {
            state.isFetchingCumRapMovieDetail = false;
            state.lichChieuMovieDetail = action.payload;
          })
          .addCase(getLichChieuMovieDetail.rejected, (state, action) => {
            state.isFetchingCumRapMovieDetail = false;
            state.lichChieuMovieDetail = action.payload;
          })
    },
  });

  export const getRapMovieList = createAsyncThunk(
    "quanLyRap/getRapMovieList",
    async (data, { dispatch, getState, rejectWithValue }) => {
      try {
        const value = getState();
        console.log(value);
        const result = await quanLyRapService.getRapMovieList();
  
        return result.data.content;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  export const getLichChieuMovieDetail = createAsyncThunk(
    "quanLyRap/getLichChieuMovieDetail",
    async (idFilm, { dispatch, getState, rejectWithValue }) => {
      try {
        const result = await quanLyRapService.getLichChieuMovieDetail(idFilm);
  
        return result.data.content;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );