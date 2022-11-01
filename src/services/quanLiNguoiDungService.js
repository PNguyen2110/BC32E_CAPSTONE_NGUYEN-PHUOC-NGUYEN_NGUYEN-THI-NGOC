import { api } from "../constants";

export const quanLiNguoiDungService = {
  layDanhSachNguoiDung: (value) => {
    if (!value.trim()) {
      return api.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
    }
    return api.get(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${value}`
    );
  },
  xoaNguoiDung: (taiKhoan) => {
    return api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  },
  themNguoiDung: (data) => {
    return api.post(`QuanLyNguoiDung/ThemNguoiDung`, data);
  },
  capNhatThongTinNguoiDung: (data) => {
    // return api.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
    return api.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
  },
  layDanhSachLoaiNguoiDung: () => {
    return api.get(`QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
  },
};
