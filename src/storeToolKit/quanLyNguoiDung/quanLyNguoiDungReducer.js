import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDungService";

let user={};
if(localStorage.getItem('USER_LOGIN')){
  user = JSON.parse(localStorage.getItem('USER_LOGIN'))
}
const initialState = {
  userLogin: user,
  isFetchingLogin: false,
  error: undefined,
};

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } =
  createSlice({
    name: "quanLyNguoiDung",
    initialState,


    reducers: {

    },

    extraReducers: (builder) => {
      builder

        .addCase(postUser.pending, (state, action) => {
          state.isFetchingLogin = true;
        })
        .addCase(postUser.fulfilled, (state, action) => {
          state.isFetchingLogin = false;
          state.userLogin = action.payload;
        })
        .addCase(postUser.rejected, (state, action) => {
          state.isFetchingLogin = false;
          state.userLogin = action.payload;
        })

    },
  });

export const postUser = createAsyncThunk(
  "quanLyNguoiDung/postUser",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDungService.postUser(data);
      localStorage.setItem('USER_LOGIN',JSON.stringify(result.data.content))
      localStorage.setItem('TOKEN',result.data.content.accessToken)
      return result.data.content;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


