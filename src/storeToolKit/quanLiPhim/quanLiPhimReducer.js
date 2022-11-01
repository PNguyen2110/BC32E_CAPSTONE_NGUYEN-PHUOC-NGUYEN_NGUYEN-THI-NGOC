import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLiPhimService } from "../../services/quanLiPhimService";

const initialState = {
  movieList: [],
  movieDetail: {},
  isFetching: false,
  isFetchingDetail: false,
  error: undefined,
  infoMovie: {},
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
        })

        // lấy thong tin phim về trang edit
        .addCase(getInfoMovies.pending, (state, action) => {
          state.isFetchingDetail = true;
        })
        .addCase(getInfoMovies.fulfilled, (state, action) => {
          state.isFetchingDetail = false;
          state.infoMovie = action.payload;
        })
        .addCase(getInfoMovies.rejected, (state, action) => {
          state.isFetchingDetail = false;
          state.infoMovie = action.payload;
        });
    },
  });

export const getMovieList = createAsyncThunk(
  "quanLiPhim/getMovieList", // action type
  async (tenPhim = "", { dispatch, getState, rejectWithValue }) => {
    try {
      // const value = getState().quanLiPhimReducer;
      const result = await quanLiPhimService.getMovieList(tenPhim);

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

      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// post films trang admin
export const postFilm = createAsyncThunk(
  "quanLiPhim/postFilm",
  async (film, { dispatch }) => {
    try {
      await quanLiPhimService.postFilm(film);
      alert("thêm phim thành công");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
);

// lấy thông tin phim về trang edit

export const getInfoMovies = createAsyncThunk(
  "quanLiPhim",
  async (idFilm, { rejectWithValue }) => {
    try {
      const result = await quanLiPhimService.getInfoMovies(idFilm);
      return result.data.content;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const postFilmUpdate = createAsyncThunk(
  "quanLiPhim/postFilmUpdate",
  async (formData, { dispatch, rejectWithValue }) => {
    console.log(rejectWithValue);
    try {
      await quanLiPhimService.postFilmUpdate(formData);

      alert("cập nhật thành công");
      dispatch(getMovieList());
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteFilm = createAsyncThunk(
  "quanLiPhim/deleteFilm",
  async (idFilm, { dispatch, rejectWithValue }) => {
    try {
      await quanLiPhimService.deleteFilm(idFilm);
      alert("xoá phim thành công");
      dispatch(getMovieList());
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
