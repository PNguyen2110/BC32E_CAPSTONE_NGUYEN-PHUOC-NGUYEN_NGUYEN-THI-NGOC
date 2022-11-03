import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Contact from '../pages/contact/Contact'
import Home from '../pages/home/Home'
import News from '../pages/news/News'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import MovieDetail from '../pages/movieDetail/MovieDetail'
import BookTicket from '../pages/bookTicket/BookTicket'
import BookResult from '../pages/bookTicket/BookResult'

const Router = () => {
  const routing = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Navigate to='home' />
        },

        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'news',
          element: <News />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path:'detail/:movieIds',
          element: <MovieDetail/>
        },
        {
          path: 'ticketroom/:id',
          element: <BookTicket />
        },
        {
          path: 'bookResult',
          element: <BookResult />
        }
        

      ]
    }
  ])
  return routing

}

export default Router