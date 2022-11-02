import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDungService";

const initialState = {
  userLogin: {},
  isFetchingLogin: false,
  isFetchingDanhSachNguoiDung: false,
  isFetchingTimKiem: false,
  timKiemNguoiDung: [],
  danhSachNguoiDung: [],
  danhSachLoaiNguoiDung: [],
  isFetchingLoaiNguoiDung: false,
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      //
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

      // lấy danh sách người dùng
      .addCase(layDanhSachNguoiDung.pending, (state, action) => {
        state.isFetchingDanhSachNguoiDung = true;
      })
      .addCase(layDanhSachNguoiDung.fulfilled, (state, action) => {
        state.isFetchingDanhSachNguoiDung = false;
        state.danhSachNguoiDung = action.payload;
      })
      .addCase(layDanhSachNguoiDung.rejected, (state, action) => {
        state.isFetchingDanhSachNguoiDung = false;
        state.danhSachNguoiDung = action.payload;
      })
      // danh sách loại người dùng
      .addCase(layDanhSachLoaiNguoiDung.pending, (state, action) => {
        state.isFetchingLoaiNguoiDung = true;
      })
      .addCase(layDanhSachLoaiNguoiDung.fulfilled, (state, action) => {
        state.isFetchingLoaiNguoiDung = false;
        state.danhSachLoaiNguoiDung = action.payload;
      })
      .addCase(layDanhSachLoaiNguoiDung.rejected, (state, action) => {
        state.isFetchingLoaiNguoiDung = false;
        state.danhSachLoaiNguoiDung = action.payload;
      });
  },
});

export const postUser = createAsyncThunk(
  "quanLyNguoiDung/postUser",
  async (data, { dispatch, getState, rejectWithValue }) => {
    try {
      const result = await quanLyNguoiDungService.postUser(data);
      localStorage.setItem("userLogin", JSON.stringify(result.data.content));
      return result.data.content;
    } catch (error) {
      console.log("error", error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const layDanhSachNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/layDanhSachNguoiDung",
  async (data = "", {}) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung(data);
      console.log(result.data.content);
      return result.data.content;
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const xoaNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/xoaNguoiDung",
  async (taiKhoan, { dispatch }) => {
    try {
      await quanLyNguoiDungService.xoaNguoiDung(taiKhoan);
      dispatch(layDanhSachNguoiDung());
      alert("Xoá thành công");
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const themNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/themNguoiDung",
  async (data, {}) => {
    try {
      await quanLyNguoiDungService.themNguoiDung(data);
      alert("thêm thànhcông");
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const capNhatThongTinNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/capNhatThongTinNguoiDung",
  async (data, {}) => {
    try {
      await quanLyNguoiDungService.capNhatThongTinNguoiDung(data);
      alert("cập nhật người dùng thành công");
    } catch (err) {
      console.log(err.response.data);
      // alert(err.response.data.message);
    }
  }
);

export const layDanhSachLoaiNguoiDung = createAsyncThunk(
  "quanLyNguoiDung/layDanhSachLoaiNguoiDung",
  async (data, {}) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();

      return result.data.content;
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);
