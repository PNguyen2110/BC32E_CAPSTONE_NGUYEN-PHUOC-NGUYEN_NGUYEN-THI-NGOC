import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { quanLyDatVeService } from "../../services/quanLyDatVeService";

const initialState = {
detailTicketRoom:{
  // thongTinPhim:{},
  // danhSachGhe:[ ]
},
isFetchingTicket:false
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
      builder
          //get info rap
          .addCase(getMovieTicket.pending, (state, action) => {
            state.isFetchingTicket = true;
          })
          .addCase(getMovieTicket.fulfilled, (state, action) => {
            state.isFetchingTicket = false;
            state.detailTicketRoom = action.payload;
          })
          .addCase(getMovieTicket.rejected, (state, action) => {
            state.isFetchingTicket = false;
            state.detailTicketRoom = action.payload;
          })  
    },
  });

 
  export const getMovieTicket = createAsyncThunk(
    "quanLyDatVe/getMovieTicket",
    async (maLichChieu, {rejectWithValue }) => {
      try {
        const result = await quanLyDatVeService.getMovieTicket(maLichChieu);
  
        return result.data.content;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );