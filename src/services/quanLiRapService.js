import { api } from "../constants/api";

export const quanLiRapService = {
  layThongTinHeThongRap: () => {
    return api.get(`QuanLyRap/LayThongTinHeThongRap`);
  },
  layThongTinCumRapTheoHeThong: (maRap) => {
    return api.get(
      `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maRap}`
    );
  },
};
