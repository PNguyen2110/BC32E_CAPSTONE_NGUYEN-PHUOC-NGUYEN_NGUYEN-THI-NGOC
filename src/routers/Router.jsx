import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";
// import MainLayout form '../components/Layouts/MainLayout'
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import News from "../pages/news/News";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MovieDetail from "../pages/movieDetail/MovieDetail";
import BookTicket from "../pages/bookTicket/BookTicket";
import AdminTemplate from "../components/template/AdminTemplate/AdminTemplate";
import { Films } from "../pages/Admin/Films/Films";
import AddFilms from "../pages/Admin/Films/AddFilms";
import EditFilms from "../pages/Admin/Films/EditFilm";
import { ShowTime } from "../pages/Admin/showTime/ShowTime";
import QuanLiNguoiDung from "../pages/Admin/quanLiNguoiDung/QuanLiNguoiDung";
import { ChinhSuaNguoiDung } from "../pages/Admin/quanLiNguoiDung/ChinhSuaNguoiDung";
import { ThemNguoiDung } from "../pages/Admin/quanLiNguoiDung/ThemNguoiDung";

const Router = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Navigate to="home" />,
        },

        {
          path: "home",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "detail/:movieIds",
          element: <MovieDetail />,
        },
        {
          path: "ticketroom/:id",
          element: <BookTicket />,
        },
      ],
    },
    {
      path: "/admin/",
      element: <AdminTemplate />,
      children: [
        {
          path: "/admin/",
          element: <Navigate to="films" />,
        },

        {
          path: "films",
          element: <Films />,
        },
        {
          path: "addFilms",
          element: <AddFilms />,
        },
        {
          path: "editFilms/:maPhim",
          element: <EditFilms />,
        },
        {
          path: "showTime/:maPhim/:tenPhim",
          element: <ShowTime />,
        },
        {
          path: "quanLiNguoiDung",
          element: <QuanLiNguoiDung />,
        },
        {
          path: "themNguoiDung",
          element: <ThemNguoiDung />,
        },
        {
          path: "chinhSuaNguoiDung/:taiKhoan",
          element: <ChinhSuaNguoiDung />,
        },
      ],
    },
  ]);
  return routing;
};

export default Router;
