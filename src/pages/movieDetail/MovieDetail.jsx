import React from 'react'
import './movieDetail.module.css'
import { Tabs } from 'antd';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieDetail, useQuanLiPhim } from '../../storeToolKit/quanLiPhim';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLichChieuMovieDetail, useQuanLyRap } from '../../storeToolKit/quanLyRap';
import moment from 'moment';

const MovieDetail = () => {

  const [tabPosition, setTabPosition] = useState('left');

  const params = useParams()
  const navigate = useNavigate()
  const { movieDetail } = useQuanLiPhim()
  const { lichChieuMovieDetail } = useQuanLyRap()

  console.log("movieDetail: ", movieDetail);
  console.log("lichChieuMovieDetail: ", lichChieuMovieDetail);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieDetail(params.movieIds))
    dispatch(getLichChieuMovieDetail(params.movieIds))
  }, [params.movieIds])
  return (
    <div>
      <div className="detailMovie" style={{ backgroundImage: `url(${movieDetail.hinhAnh})`, display: 'flex', flexDirection: 'column' }}>


        <div className="box1 grid grid-cols-3 container  ">
          <div className='col-span-1'>

            <img src={movieDetail.hinhAnh} alt="123" style={{ width: '80%', height: '380px', padding: '20px 0px 10px 30px' }} />

          </div>
          <div className='col-span-2 '>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
              <h2 className="mb-4 text-3xl font-semibold leading-tight text-white">Movie Detail</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full  text-left">
                  <thead className="dark:bg-gray-700">
                  </thead>
                  <tbody>
                    <tr className="border-b border-opacity-20 dark:border-gray-700">
                      <td style={{ fontSize: '14px' }}>
                        <p >Movie name :</p>
                      </td>
                      <td >
                        <p style={{ fontSize: '18px', color: '#83c641' }} >{movieDetail.tenPhim}</p>
                      </td>
                    </tr>
                    <tr className="border-b border-opacity-20 dark:border-gray-700">
                      <td >
                        <p style={{ fontSize: '14px' }}>Describe :</p>
                      </td>
                      <td >
                        <p>{movieDetail.moTa}</p>
                      </td>
                    </tr>
                    <tr className="border-b border-opacity-20 dark:border-gray-700">
                      <td >
                        <p style={{ fontSize: '14px' }}>Premiere date :</p>
                      </td>
                      <td >
                        <p>{moment(movieDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                      </td>
                    </tr>
                    <tr className="border-b border-opacity-20 dark:border-gray-700">
                      <td >
                        <p style={{ fontSize: '14px' }}>Rate :</p>
                      </td>
                      <td >
                        <p>{movieDetail.danhGia} / 10</p>
                      </td>
                    </tr>
                  </tbody>

                </table>
                <div className='flex mt-4'>
                  <button type="button" className="px-10 py-2 font-semibold rounded-full dark:bg-pink-400 dark:text-gray-800 mr-2 transition hover:bg-white ">
                    <a href={movieDetail.trailer} className="text-black hover:text-black">Trailer</a>
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='p-2 container  box2'>

          <Tabs
            tabPosition={tabPosition}
            items={lichChieuMovieDetail.heThongRapChieu?.map((item, index) => {

              return {
                label: <div>
                  <img src={item.logo} alt={item.logo} className="rounded-full w-14 h-14" />
                  <div >
                    <p className='text-center text-white mt-2 text-xl'>{item.tenHeThongRap}</p>
                  </div>
                </div>,
                key: index,
                children: <div>
                  {item.cumRapChieu?.map((cumRap) => {
                    return <div key={index} className="mb-4">
                      <div className='flex flex-row text-left'>
                        <img src={cumRap.hinhAnh} alt="" style={{ width: '100px', height: '100px' }} className="rounded-md" />
                        <div className='ml-2'>
                          <p style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: 1, color: 'white' }}>{cumRap.tenCumRap}</p>
                          <p className='text-white text-xs'>{cumRap.diaChi}</p>
                          <div className='thong-tin-lich-chieu grid grid-cols-4  gap-5'>
                            {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                              return <div key={index} className="cols-span-1">
                                <button onClick={() => navigate(`/ticketroom/${lichChieu.maLichChieu}`)}className='text-red-600' style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                  {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                              </div>
                            })}
                          </div>
                        </div>
                      </div>

                    </div>
                  })}
                </div>,
              };
            })}
          />
        </div>

        <br />


      </div>


    </div>
  )
}

export default MovieDetail