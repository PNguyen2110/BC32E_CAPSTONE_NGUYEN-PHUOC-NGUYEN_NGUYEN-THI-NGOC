import { api } from "../constants/api";

export const quanLyRapService = {
  getRapMovieList: () => {
    return api.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13")
  },
  getLichChieuMovieDetail: (idFilm) => {
    return api.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`)
  },
};
