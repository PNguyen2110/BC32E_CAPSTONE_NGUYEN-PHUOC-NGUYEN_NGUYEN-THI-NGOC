import { api } from "../constants/api";

export const quanLyNguoiDungService = {
    postUser: (data) => {
      return api.post("QuanLyNguoiDung/DangNhap", data);
    },
    getMovieDetail: (idFilm) => {
      return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
    },
};