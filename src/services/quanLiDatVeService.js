import { api } from "../constants";

export const quanLiDatVeService = {
  taoLichChieu: (data) => {
    return api.post(`QuanLyDatVe/TaoLichChieu`, data);
  },
};
