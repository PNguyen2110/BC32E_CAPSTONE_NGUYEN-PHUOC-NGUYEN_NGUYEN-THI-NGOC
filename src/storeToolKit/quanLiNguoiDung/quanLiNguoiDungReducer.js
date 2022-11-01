import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLiNguoiDungService } from "../../services/quanLiNguoiDungService";
const initialState = {
  isFetching: false,
  isFetchingTimKiem: false,
  timKiemNguoiDung: [],
  danhSachNguoiDung: [],
  danhSachLoaiNguoiDung: [],
  isFetchingLoaiNguoiDung: false,
};
export const {
  reducer: quanLiNguoiDungReducer,
  actions: quanLiNguoiDungAction,
} = createSlice({
  name: "quanLiNguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // lấy danh sách người dùng
      .addCase(layDanhSachNguoiDung.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(layDanhSachNguoiDung.fulfilled, (state, action) => {
        state.isFetching = false;
        state.danhSachNguoiDung = action.payload;
      })
      .addCase(layDanhSachNguoiDung.rejected, (state, action) => {
        state.isFetching = false;
        state.danhSachNguoiDung = action.payload;
      })
      // danh sách loại ngườidùng
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

export const layDanhSachNguoiDung = createAsyncThunk(
  "quanLiNguoiDung/layDanhSachNguoiDung",
  async (data = "", {}) => {
    try {
      const result = await quanLiNguoiDungService.layDanhSachNguoiDung(data);

      return result.data.content;
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const xoaNguoiDung = createAsyncThunk(
  "quanLiNguoiDung/xoaNguoiDung",
  async (taiKhoan, { dispatch }) => {
    try {
      await quanLiNguoiDungService.xoaNguoiDung(taiKhoan);
      dispatch(layDanhSachNguoiDung());
      alert("Xoá thành công");
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const themNguoiDung = createAsyncThunk(
  "quanLiNguoiDung/themNguoiDung",
  async (data, {}) => {
    try {
      await quanLiNguoiDungService.themNguoiDung(data);
      alert("thêm thànhcông");
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const capNhatThongTinNguoiDung = createAsyncThunk(
  "quanLiNguoiDung/capNhatThongTinNguoiDung",
  async (data, {}) => {
    try {
      await quanLiNguoiDungService.capNhatThongTinNguoiDung(data);
      alert("cập nhật người dùng thành công");
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);

export const layDanhSachLoaiNguoiDung = createAsyncThunk(
  "quanLiNguoiDung/layDanhSachLoaiNguoiDung",
  async (data, {}) => {
    try {
      const result = await quanLiNguoiDungService.layDanhSachLoaiNguoiDung();

      return result.data.content;
    } catch (err) {
      alert(err.response.data.message);
    }
  }
);
