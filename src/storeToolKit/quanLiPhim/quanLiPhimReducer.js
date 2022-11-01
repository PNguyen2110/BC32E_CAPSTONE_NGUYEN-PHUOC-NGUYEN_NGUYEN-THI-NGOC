import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLiPhimService } from "../../services/quanLiPhimService";

const initialState = {
  bannerList: [],
  movieList: [],
  movieDetail: {},
  isFetching: false,
  isFetchingDetail: false,
  isFetchingBanner: false,
};

export const { reducer: quanLiPhimReducer, actions: quanLiPhimActions } =
  createSlice({
    name: "quanLiPhim",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
      builder
        //get movie banner list
        .addCase(getMovieBannerList.pending, (state, action) => {
          state.isFetchingBanner = true;
        })
        .addCase(getMovieBannerList.fulfilled, (state, action) => {
          state.isFetchingBanner = false;
          state.bannerList = action.payload;
        })
        .addCase(getMovieBannerList.rejected, (state, action) => {
          state.isFetchingBanner = false;
          state.bannerList = action.payload;
        })
        // get movieList
        .addCase(getMovieList.pending, (state, action) => {
          state.isFetching = true;
        })
        .addCase(getMovieList.fulfilled, (state, action) => {
          state.isFetching = false;
          state.movieList = action.payload;
        })
        .addCase(getMovieList.rejected, (state, action) => {
          state.isFetching = false;
          state.movieList = action.payload;
        })
        // get movie details

        .addCase(getMovieDetail.pending, (state, action) => {
          state.isFetchingDetail = true;
        })
        .addCase(getMovieDetail.fulfilled, (state, action) => {
          state.isFetchingDetail = false;
          state.movieDetail = action.payload;
        })
        .addCase(getMovieDetail.rejected, (state, action) => {
          state.isFetchingDetail = false;
          state.movieDetail = action.payload;
        })
    },
  });

export const getMovieList = createAsyncThunk(
  "quanLiPhim/getMovieList",
  async (rejectWithValue ) => {
    try {
      const result = await quanLiPhimService.getMovieList();

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "quanLiPhim/getMovieDetail",
  async (idFilm, { rejectWithValue }) => {
    try {
      const result = await quanLiPhimService.getMovieDetail(idFilm);

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getMovieBannerList = createAsyncThunk(
  "quanLiPhim/getMovieBannerList",
  async (rejectWithValue) => {
    try {
      const result = await quanLiPhimService.getMovieBannerList();

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
