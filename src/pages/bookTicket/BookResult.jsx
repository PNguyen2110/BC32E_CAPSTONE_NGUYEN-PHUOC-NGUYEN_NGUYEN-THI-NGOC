import moment from 'moment';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postBookResult, useQuanLyNguoiDung } from '../../storeToolKit/quanLyNguoiDung';
import _ from 'lodash'
import { Fragment } from 'react';
import { Skeleton } from 'antd';
const BookResult = () => {

  const { inFoUser,userLogin,isFetchinginFoUser } = useQuanLyNguoiDung()
  console.log("inFoUser: ", inFoUser);
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(postBookResult()) 
  },[])

  if(isFetchinginFoUser){
    return <div className='container pt-40'>
      <div className='grid grid-cols-3 gap-9 container'>
      {
         [...Array(10)].map(e=>{
          return <div className='col-span-1 mt-4'>
            <Skeleton.Button active block style={{height:'350px'}}/>
          </div>
         })
      }
      </div>
      
    </div>
    
  
  }
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-32 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-600">Booking history</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thank you for using our service. Have a nice day!!!</p>
          </div>
          <div className="flex flex-wrap -m-2">

            {inFoUser.thongTinDatVe?.map((ticket,index)=>{
              return   <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="phim" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{ticket.tenPhim}</h2>
                  <p className="text-gray-500"><i className='font-semibold'>Time:</i> {moment(ticket.ngayDat).format('hh:mm A ')} - <i className='font-semibold'>Date:</i>  {moment(ticket.ngayDat).format('DD-MM-YYYY') }</p>
                  <p><i className='font-semibold'>Address:</i> {_.first(ticket.danhSachGhe).tenHeThongRap}</p>
                  <p><i className='font-semibold'>Tên Rạp:</i> {_.first(ticket.danhSachGhe).tenCumRap}</p> 
                  <p> <i className='font-semibold'>Ghế:</i> {ticket.danhSachGhe.map((ghe,index)=>{
                     return <Fragment>
                       <span key={index}>{ghe.tenGhe} , </span>
                       {(index + 1) % 20 === 0 ? <br /> : ''}
                     </Fragment>
                  
                     })}</p>
                  <p></p>
                </div>
              </div>
            </div>
           
            })}
          
          </div>
        </div>
      </section>

    </div>
  )
}

export default BookResult