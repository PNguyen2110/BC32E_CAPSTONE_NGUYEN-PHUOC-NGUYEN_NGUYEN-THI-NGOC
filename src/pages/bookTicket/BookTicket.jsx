import React from 'react'
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieTicket, postTicket, quanLyDatVeActions, useQuanLyDatVe } from '../../storeToolKit/quanLyDatVe';
import { useQuanLyNguoiDung } from '../../storeToolKit/quanLyNguoiDung';
import style from './BookTicket.module.css';
import './BookTicket.css';
import _ from 'lodash';
import { UserOutlined ,HistoryOutlined} from '@ant-design/icons';
import { Skeleton } from 'antd';
class ThongTinDatVe {
  maLichChieu = 0;
  danhSachVe = [

  ]
}
const BookTicket = () => {

  const { userLogin } = useQuanLyNguoiDung()
  const { detailTicketRoom, danhSachGheDangDat,isFetchingBookingTicket} = useQuanLyDatVe()
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('USER_LOGIN')) {
      return navigate("/login")
    }
    dispatch(getMovieTicket(params.id))
  }, [])

  const renderSeats = () => {
    return detailTicketRoom.danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
      let gheDaDat = ghe.daDat === true ? 'gheDaDat' : ''
      let classGheDangDat = ''
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      let classGheDaDuocDat = ''
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat'
      }

      if (indexGheDD !== -1) {
        classGheDangDat = 'gheDangDat'
      }

      return <Fragment key={ghe.maGhe}>
        <button onClick={() => { dispatch(quanLyDatVeActions.bookSeats(ghe)) }}
          disabled={ghe.daDat} className={`ghe ${classGheVip} ${gheDaDat} ${classGheDangDat} ${classGheDaDuocDat} `}  >
          {ghe.daDat ? classGheDaDuocDat !== '' ? <UserOutlined /> : <span>x</span> : ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }
  if(isFetchingBookingTicket){
    return <div className='container'>
    <div className='grid grid-cols-12 pt-24 container'>
    {
       [...Array(100)].map(e=>{
        return <div className='col-span-1 mt-4'>
          <Skeleton.Button active />
        </div>
       })
    }
    </div>
    
  </div>
  }
  return (
    <div className='bg-green-100 bg-opacity-50'>
      <div className='container grid grid-cols-12 pt-24 pb-12'>
        <div className='col-span-8 text-center'>
          <div className='text-2xl display-4 font-bold'>BOOKING MOVIE TICKET</div>
          <div style={{ fontSize: '20px ' }} className='mt-3 font-medium'><i>Screen</i></div>
          <div className='mt-1' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
            <div className={`${style['bookTicket-screen']}`}></div>
          </div>
          <div>
            {renderSeats()}
          </div>
          <div className=' pl-10  container'>
            <div className='pt-2 text-left font-semibold'><i style={{ fontSize: '16px' }}>Ticket status</i> :</div>
            <div className=' flex pt-4'>
              <button className='gheDaDat mr-2' > </button>
              <span className='pr-4' > : Ghế đã đặt</span>
              <button className='gheDangDat  mr-2'> </button>
              <span className='pr-4'>: Ghế đang đặt</span>
              <button className='gheButton mr-2' > </button>
              <span className='pr-4'>: Ghế thường</span>
              <button className='gheVip mr-2' > </button>
              <span className='pr-4'>: Ghế VIP</span>
              <button className='gheDaDuocDat  mr-2 pb-4' > <UserOutlined  /></button>
              <span className='pr-4'>: Ghế bạn đã mua</span>
            </div>
          </div>
        </div>
        <div className='col-span-4 pt-16 totalTicket' style={{fontSize:'16px'}}>
          <h3 className='text-center pb-6'>
            <span  className='text-red-300  text-2xl  font-bold'>Total : </span>
            <span className='text-warning text-pink-200 text-xl underline underline-offset-4'> {danhSachGheDangDat.reduce((sum, seats) => {
              return sum += seats.giaVe
            }, 0).toLocaleString() } </span>
            <span className='text-pink-200 text-sm'> (vnd)</span>
          </h3>
          <h3 className='text-xl'>{detailTicketRoom.thongTinPhim?.tenPhim}</h3>
          <p>Address: {detailTicketRoom.thongTinPhim?.tenCumRap} - {detailTicketRoom.thongTinPhim?.tenRap}</p>
          <p>Date : {detailTicketRoom.thongTinPhim?.ngayChieu} - {detailTicketRoom.thongTinPhim?.gioChieu}</p>
          <hr />
          <div className='my-2'>
            <i>Email</i>
            <br />
            {userLogin.email}
          </div>
          <hr />
          <div className='my-2 '>
            <i>Phone</i>
            <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div id="table-wrapper">
            <div className='mt-2 ' id="table-scroll">
              <table className='table-auto'>
                <thead className='pt-4'>
                  <tr className='text-light' style={{ fontSize: '16px' }} >
                    <th className='textfix text-rose-600 ' style={{ left: '-25px' }} >Seats</th>
                    <th className='textfix  text-rose-600 ' style={{ left: '130px' }} >Giá (vnd)</th>
                    <th ></th>
                  </tr>
                </thead>
                <tbody >
                  {_.sortBy(danhSachGheDangDat, ['maGhe']).map((gheDD, index) => {
                    return <tr key={index} className="text-light">
                      <td className='px-2 border border-slate-600 text-center py-1'>{gheDD.stt}</td>
                      <td className='pl-8 border border-slate-600 text-right'>{(gheDD.giaVe).toLocaleString()}</td>
                      <td className='border border-slate-600 text-center'>
                        <button className=" bg-red-600 px-2 rounded-md text-white" onClick={() => { dispatch(quanLyDatVeActions.deleteSeats(gheDD)) }}>Hủy</button>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='pt-6 flex-row ' style={{display:'flex',justifyContent:'space-between'}}>
            <button type="button" className="px-10 py-2 font-semibold rounded-full dark:bg-pink-400 dark:text-black transition  hover:bg-yellow-200 cursor-pointer" onClick={() => {
              let thongTinDatVe = new ThongTinDatVe()
              thongTinDatVe.maLichChieu = params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat
              dispatch(postTicket(thongTinDatVe))
            }
            } >
              Buy Ticket
            </button>
            <div className='text-red-600 hover:text-yellow-400'> <HistoryOutlined className='text-xl'/><a href="" onClick={() => {  navigate(`/bookResult`)} }  className="cursor-pointer text-red-600 hover:text-yellow-400" style={{fontSize:'18px',paddingTop:'20px'}} >Booking history</a></div>
           
          </div>
        </div>
      </div>
    
    </div >
  )
}

export default BookTicket