import { api } from "../constants/api";

export const quanLiPhimService = {
  getMovieList: () => {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  },
  getMovieDetail: (idFilm) => {
    return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
  },
  demoPost: (data) => {
    return api.post("url", data);
  },
};
