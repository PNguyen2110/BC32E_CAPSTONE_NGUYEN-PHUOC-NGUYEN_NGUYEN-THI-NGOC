import { api } from "../constants/api";

export const quanLyRapService = {
    getRapMovieList: ()=>{
        return api.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13")
      },
};