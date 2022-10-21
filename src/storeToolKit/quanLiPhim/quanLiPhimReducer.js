import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { quanLiPhimService } from "../../services/quanLiPhimService";

const initialState = {
  movieList: [],
  movieDetail: {},
  isFetching: false,
  isFetchingDetail: false,
  error: undefined,
  number: 1,
};

export const { reducer: quanLiPhimReducer, actions: quanLiPhimActions } =
  createSlice({
    name: "quanLiPhim",
    initialState,

    // xu li dong bo
    reducers: {
      //   getMovieList: (state, action) => {
      //     state.movieList = action.payload;
      //   },
      //   getMovieDetail: (state, action) => {
      //     state.movieDetail = action.payload;
      //   },
      increase: (state, action) => {
        state.number = state.number += action.payload;
      },
    },
    // xu li bat dong bo (call Api)
    extraReducers: (builder) => {
      builder
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
        });
    },
  });

export const getMovieList = createAsyncThunk(
  "quanLiPhim/getMovieList", // action type
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const value = getState();
      console.log(value);
      const result = await quanLiPhimService.getMovieList();
      // await axios({
      //   url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13`,
      //   method: "GET",
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ",
      //   },
      // });

      //   dispatch(quanLiPhimActions.getMovieList(result.data.content));
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "quanLiPhim/getMovieDetail",
  async (idFilm, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLiPhimService.getMovieDetail(idFilm);
      // await axios({
      //   method: "GET",
      //   url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`,
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMS8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2Nzg0OTI4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3ODY0MDQwMH0.nNcGn0C4SvUfrKPkxYBi5rhhLNuGbmfuND5eXehhzPQ",
      //   },
      // });
      // dispatch(quanLiPhimActions.getMovieDetail(result.data.content));
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
