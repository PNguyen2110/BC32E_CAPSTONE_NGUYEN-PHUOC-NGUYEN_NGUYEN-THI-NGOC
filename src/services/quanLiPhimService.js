import { api } from "../constants/api";

export const quanLiPhimService = {
  getMovieList: (tenPhim) => {
    if (!tenPhim.trim()) {
      return api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
    }
    return api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`);
  },
  getMovieDetail: (idFilm) => {
    return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
  },
  // postFilm trang admin
  postFilm: (film) => {
    return api.post("QuanLyPhim/ThemPhimUploadHinh", film);
  },
  // lấy thong tin phim về trang edit
  getInfoMovies: (idFilm) => {
    return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${idFilm}`);
  },
  // post phim đã cập nhật
  postFilmUpdate: (formData) => {
    return api.post(`QuanLyPhim/CapNhatPhimUpload`, formData);
  },
  // xoá phim
  deleteFilm: (idFilm) => {
    return api.delete(
      `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${idFilm}`
    );
  },
};
