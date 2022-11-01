import React from 'react'
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const BookTicket = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    if(!localStorage.getItem('USER_LOGIN')){
      return navigate("/login")
  }
  },[])
return (
  <div>BookTicket</div>
)
}

export default BookTicket