import { api } from "../constants/api";

export const quanLiPhimService = {
  getMovieBannerList: ()=>{
    return api.get("QuanLyPhim/LayDanhSachBanner")
  },
  getMovieList: () => {
    return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  },
  getMovieDetail: (idFilm) => {
    return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
  }
};

