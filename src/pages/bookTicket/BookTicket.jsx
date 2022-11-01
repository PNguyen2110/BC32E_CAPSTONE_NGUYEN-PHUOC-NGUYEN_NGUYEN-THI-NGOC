import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieTicket, useQuanLyDatVe } from '../../storeToolKit/quanLyDatVe';
import { useQuanLyNguoiDung } from '../../storeToolKit/quanLyNguoiDung';

const BookTicket = () => {

  const { userLogin } = useQuanLyNguoiDung()
  const { detailTicketRoom } = useQuanLyDatVe()
  console.log("detailTicketRoom: ", detailTicketRoom);
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!localStorage.getItem('USER_LOGIN')) {
      return navigate("/login")
    }
    dispatch(getMovieTicket(params.id))
  }, [params.id])
  
  return (
    <div>
      <div className='container grid grid-cols-12 pt-32 pb-4'>


        <div className='col-span-9 text-center'>
          <div className='text-2xl display-4 font-bold'>ĐẶT VÉ XEM PHIM</div>
          <div style={{ fontSize: '20px ' }} className='mt-3 font-medium'>Màn hình</div>
          <div className='mt-1' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >

            <div className='bookTicket-screen'></div>

          </div>





        </div>


        <div className='col-span-3'>
          <h3 className='text-green-400 text-center text-2xl pb-2'>Ticket Price: 0đ</h3>
          <hr />
          <h3 className='text-xl'>Lật Mặt 48h</h3>
          <p>Address: BHD Start - Vincom 3/2</p>
          <p>Date : 25/04/2021 - 12:05 rạp 5</p>
          <hr />

          <div className='grid grid-cols-2 my-5'>

            <div>
              <span className='text-red-400'>Ghế</span>
            </div>
            <div className='text-right'>
              <span className='text-greens'> 0 Đ</span>
            </div>
          </div>
          <hr />
          <div className='my-5'>
            <i>Email</i>
            <br />
            {userLogin.email}
          </div>
          <hr />
          <div className='my-5'>
            <i>Phone</i>
            <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className='mb-0 pt-10'>
            <button type="button" className="px-10 py-2 font-semibold rounded-full dark:bg-pink-400 dark:text-black transition  hover:bg-yellow-200"  >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default BookTicket