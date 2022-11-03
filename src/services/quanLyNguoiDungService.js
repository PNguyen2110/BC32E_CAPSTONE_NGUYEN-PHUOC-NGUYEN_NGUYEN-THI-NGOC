import { api } from "../constants/api";

export const quanLyNguoiDungService = {
    postUser: (data) => {
      return api.post("QuanLyNguoiDung/DangNhap", data);
    },
   postBookResult: () => {
      return api.post("QuanLyNguoiDung/ThongTinTaiKhoan")
    }
};