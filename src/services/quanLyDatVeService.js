import { api } from "../constants/api";

export const quanLyDatVeService = {
  getMovieTicket: (maLichChieu)=>{
    return api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
  },
};

