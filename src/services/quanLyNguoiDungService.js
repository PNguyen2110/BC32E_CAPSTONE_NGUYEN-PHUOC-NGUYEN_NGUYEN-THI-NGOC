import { api } from "../constants/api";

export const quanLyNguoiDungService = {
    postUser: (data) => {
      return api.post("QuanLyNguoiDung/DangNhap", data);
    },
};