import React from 'react'
import './movieDetail.module.css'
import { Tabs } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail, useQuanLiPhim } from '../../storeToolKit/quanLiPhim';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const MovieDetail = () => {

  const [tabPosition, setTabPosition] = useState('left');

  const params = useParams()

  const { movieDetail } = useQuanLiPhim()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieDetail(params.movieIds))
  }, [params.movieIds])
  return (

    <div className="detailMovie" style={{ backgroundImage: `url(${movieDetail.hinhAnh})`, display: 'flex', flexDirection: 'column' }}>


      <div className="box1 grid grid-cols-3 container">

        <div className='col-span-1'>

          <img src={movieDetail.hinhAnh} alt="123" style={{ width: '80%', height: '350px', padding: '30px 0px 10px 30px' }} />

        </div>
        <div className='col-span-2'>



          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight text-white">Movie Detail</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs text-left">
                
                <thead className="dark:bg-gray-700">
                 
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20 dark:border-gray-700">
                    <td className="p-3" style={{fontSize:'14px'}}>
                      <p >Movie Name:</p>
                    </td>
                    <td className="p-3">
                      <p style={{fontSize:'18px', color:'#83c641'}} >{movieDetail.tenPhim}</p>
                    </td>
                   
                  </tr>
                 
                  <tr className="border-b border-opacity-20 dark:border-gray-700">
                    <td className="p-3">
                      <p style={{fontSize:'14px'}}>Mo Ta:</p>
                    </td>
                    <td className="p-3">
                      <p>{movieDetail.moTa}</p>
                    </td>
                   
                  </tr>
                  <tr className="border-b border-opacity-20 dark:border-gray-700">
                    <td className="p-3">
                      <p style={{fontSize:'14px'}}>Trailer:</p>
                    </td>
                    <td className="p-3">
                      <p>{movieDetail.trailer}</p>
                    </td>
                   
                  </tr>
                   <tr className="border-b border-opacity-20 dark:border-gray-700">
                    <td className="p-3">
                      <p style={{fontSize:'14px'}}>Danh Gia:</p>
                    </td>
                    <td className="p-3">
                      <p>{movieDetail.danhGia} / 10</p>
                    </td>
                   
                  </tr>
                </tbody>
              </table>
            </div>
          </div>




        </div>
      </div>

      {/* <div className='p-16'>
        <Tabs
          tabPosition={tabPosition}
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: `Tab ${id}`,
              key: id,
              children: `Content of Tab ${id}`,
            };
          })}
        />
      </div> */}


    </div>


  )
}

export default MovieDetail