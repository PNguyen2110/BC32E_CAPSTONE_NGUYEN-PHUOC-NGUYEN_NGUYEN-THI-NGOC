import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AdminTemplate from "../components/template/AdminTemplate/AdminTemplate";
import { Usertemplate } from "../components/template/UserTemplate";
import AddFilms from "../pages/Admin/Films/AddFilms";
import EditFilms from "../pages/Admin/Films/EditFilm";
import { Films } from "../pages/Admin/Films/Films";
import { ChinhSuaNguoiDung } from "../pages/Admin/quanLiNguoiDung/ChinhSuaNguoiDung";
import QuanLiNguoiDung from "../pages/Admin/quanLiNguoiDung/QuanLiNguoiDung";
import { ThemNguoiDung } from "../pages/Admin/quanLiNguoiDung/ThemNguoiDung";
import { ShowTime } from "../pages/Admin/showTime/ShowTime";

export const Router = () => {
  const routing = useRoutes([
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
    {
      path: "/",
      element: <Usertemplate />,
    },
  ]);
  return routing;
};
