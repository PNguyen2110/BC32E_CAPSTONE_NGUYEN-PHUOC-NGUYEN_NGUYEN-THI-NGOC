import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useQueryUrl } from '../../Hooks/useQueryUrl'
import { getMovieList } from '../../storeToolKit/quanLiPhim/quanLiPhimReducer'
import { useQuanLiPhim } from '../../storeToolKit/quanLiPhim/quanLiPhimSelector'
import MultipleRowSlick from './MultipleRowSlick'


const HomeCard = () => {

  const dispatch = useDispatch()
  
  const [query,setQueryUrl] = useQueryUrl({
    isShowing: true
  })

  const { movieList } = useQuanLiPhim()
  console.log("movieList: ", movieList);
 
  useEffect(() => {

    dispatch(getMovieList())
  }, [])
  return (
    <div className='container'>
      <div className='mt-10 mb-5 text-white ml-24'>
      <button type="button" class="px-8 py-3 font-semibold border rounded dark:border-pink-300 dark:text-red-500" onClick={()=>{
          setQueryUrl({
            isShowing: true,
          })
        }}>Available </button>
      <button type="button" class="ml-4 px-8 py-3 font-semibold border rounded dark:border-pink-300 dark:text-red-500" onClick={()=>{
          setQueryUrl({
            isShowing: false,
          })
        }}>Is coming</button>
      </div>
          
      <MultipleRowSlick movieList={movieList} query={query.isShowing}/>
      
      </div>
  )
}

export default HomeCard