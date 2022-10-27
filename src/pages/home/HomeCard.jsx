import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMovieList } from '../../storeToolKit/quanLiPhim/quanLiPhimReducer'
import { useQuanLiPhim } from '../../storeToolKit/quanLiPhim/quanLiPhimSelector'
import MultipleRowSlick from './MultipleRowSlick'


const HomeCard = () => {
  const dispatch = useDispatch()
  const { movieList } = useQuanLiPhim()
  console.log("movieList: ", movieList);
 
  useEffect(() => {

    dispatch(getMovieList())
  }, [])
  return (
    <div className='container'>
      <div className='mt-10 text-white ml-44'>
      <button type="button" class="px-8 py-3 font-semibold border rounded dark:border-pink-300 dark:text-red-500">Dang Chieu </button>
      <button type="button" class="ml-4 px-8 py-3 font-semibold border rounded dark:border-pink-300 dark:text-red-500">Sap Chieu</button>
      </div>
          
      <MultipleRowSlick movieList={movieList}/>
      
      </div>
  )
}

export default HomeCard