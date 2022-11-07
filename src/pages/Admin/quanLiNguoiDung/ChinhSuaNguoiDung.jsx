import { Button, Form, Select } from "antd";
import { ErrorMessage, useFormik } from "formik";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  capNhatThongTinNguoiDung,
  layDanhSachLoaiNguoiDung,
  layDanhSachNguoiDung,
} from "../../../storeToolKit/quanLyNguoiDung";
import * as yup from "yup";

export const ChinhSuaNguoiDung = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // dispatch(layDanhSachNguoiDung());
    dispatch(layDanhSachLoaiNguoiDung());
  }, []);
  const { danhSachNguoiDung, danhSachLoaiNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungReducer
  );

  const user = JSON.parse(localStorage.getItem("user"));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: user?.taiKhoan,
      matKhau: user?.matKhau,
      email: user?.email,
      soDT: user?.soDT,
      maNhom: "GP01",
      maLoaiNguoiDung: user?.maLoaiNguoiDung,
      hoTen: user?.hoTen,
    },
    validationSchema: yup.object({
      taiKhoan: yup.string().required("* vui lòng nhập thông tin"),
      matKhau: yup
        .string()
        .required("* vui lòng nhập thông tin")
        .min(5, "* mật khẩu phải từ 5- 12 kí tự")
        .max(12, "* mật khẩu phải từ 5- 12 kí tự"),
      email: yup
        .string()
        .email("* email không đúng định dạnh")
        .required("* vui lòng nhập thông tin"),
      soDT: yup.string().required("* vui lòng nhập thông tin"),
      hoTen: yup.string().required("* vui lòng nhập thông tin"),
      maLoaiNguoiDung: yup.string().required("* vui lòng chọn loại người dùng"),
    }),
    onSubmit: (values) => {
      dispatch(capNhatThongTinNguoiDung(values));
      navigate("/admin/quanLiNguoiDung");
    },
  });

  return (
    <div className="lg:container">
      <h3 className="text-2xl mb-10">Thêm người dùng</h3>
      <form onSubmitCapture={formik.handleSubmit} className="container">
        <div className="grid grid-cols-2 gap-14">
          <div>
            <Component className="form-control mb-14">
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                value={formik.values?.taiKhoan}
                className="inputText"
                placeholder=" "
                type="text"
              />
              <label className="pb-4" htmlFor="">
                Tài Khoản
              </label>
              {<ErrorMessage name="taiKhoan" /> && (
                <p className="text-red-400 mt-0">{formik.errors.taiKhoan}</p>
              )}
            </Component>

            <Component className="form-control mb-14">
              <input
                name="matKhau"
                value={formik.values?.matKhau}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="text"
              />
              <label className="pb-4" htmlFor="">
                Mật khẩu
              </label>
              {<ErrorMessage name="matKhau" /> && (
                <p className="text-red-400 mt-0">{formik.errors.matKhau}</p>
              )}
            </Component>

            <Component className="form-control mb-14">
              <input
                name="hoTen"
                value={formik.values?.hoTen}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="text"
              />
              <label className="pb-4" htmlFor="">
                Họ tên
              </label>
              {<ErrorMessage name="hoTen" /> && (
                <p className="text-red-400 mt-0">{formik.errors.hoTen}</p>
              )}
            </Component>
          </div>
          <div>
            <Component className="form-control mb-14">
              <input
                name="email"
                value={formik.values?.email}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="text"
              />
              <label className="pb-4" htmlFor="">
                Email
              </label>
              {<ErrorMessage name="email" /> && (
                <p className="text-red-400 mt-0">{formik.errors.email}</p>
              )}
            </Component>

            <Component className="form-control mb-14">
              <input
                name="soDt"
                value={formik.values?.soDT}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="number"
              />
              <label className="pb-4" htmlFor="">
                Số điện thoại
              </label>
              {<ErrorMessage name="soDT" /> && (
                <p className="text-red-400 mt-0">{formik.errors.soDT}</p>
              )}
            </Component>
            <Component>
              <select
                name="maLoaiNguoiDung"
                value={formik.values?.maLoaiNguoiDung}
                onChange={formik.handleChange}
              >
                {danhSachLoaiNguoiDung?.map((item, index) => (
                  <option value={item.maLoaiNguoiDung} key={index}>
                    {item.tenLoai}
                  </option>
                ))}
              </select>
              {<ErrorMessage name="maLoaiNguoiDung" /> && (
                <p className="text-red-400 mt-0">
                  {formik.errors.maLoaiNguoiDung}
                </p>
              )}
            </Component>
          </div>
        </div>

        <div className="flex mr-[100px]">
          <button
            type="submit"
            className="block ml-auto bg-blue-400 text-white px-5 py-3"
          >
            Lưu
          </button>
        </div>
      </form>
    </div>
  );
};

const Component = styled.div`
  position: relative;
  select,
  input {
    width: 80%;
    border-bottom: 1px solid #60a5fa;
    font-size: 15px;
    height: 30px;
    padding: 0 20px;

    &:focus {
      border-bottom: 1px solid #60a5fa;
      box-shadow: none;
      outline: none;
    }
    &:not(:placeholder-shown) + label,
    &:focus + label {
      top: -5px;
      color: #60a5fa;
    }
  }
  /* option, */
  label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    pointer-events: none;
    user-select: none;
    transition: 0.3s ease;
    color: #999;
    font-size: 16px;
  }
`;
