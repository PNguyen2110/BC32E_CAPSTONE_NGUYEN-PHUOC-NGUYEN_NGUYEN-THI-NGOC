import { Button, Form, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { ErrorMessage, useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  layDanhSachLoaiNguoiDung,
  themNguoiDung,
} from "../../../storeToolKit/quanLiNguoiDung/quanLiNguoiDungReducer";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const ThemNguoiDung = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "",
      hoTen: "",
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
      soDT: yup
        .string()
        .required("* vui lòng nhập thông tin")
        .min(9, "* mật khẩu phải từ 9- 11 kí tự")
        .max(11, "* mật khẩu phải từ 9- 11 kí tự"),
      hoTen: yup.string().required("* vui lòng nhập thông tin"),
      maLoaiNguoiDung: yup
        .string()
        .required("* vui lòng chọn loại người dùng")

        .oneOf(["KhachHang", "QuanTri"], "chọn loại người dùng không hợp lệ"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      dispatch(themNguoiDung(values));
      navigate("/admin/quanLiNguoiDung");
    },
  });
  useEffect(() => {
    dispatch(layDanhSachLoaiNguoiDung());
  }, []);
  const { danhSachLoaiNguoiDung } = useSelector(
    (state) => state.quanLiNguoiDungReducer
  );

  return (
    <div className="lg:container">
      <h3 className="text-2xl mb-10 text-center lg:text-left">
        Thêm người dùng
      </h3>
      <form onSubmit={formik.handleSubmit} className="container">
        <div className="grid grid-cols-1 gap-0 lg:gap-14 lg:grid lg:grid-cols-2 text-center">
          <div>
            <Component className="form-control mb-14">
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                value={formik.values.taiKhoan}
                className="inputText"
                placeholder=" "
                type="text"
                onBlur={formik.handleBlur}
              />
              <label className="pb-4" htmlFor="">
                Tài Khoản
              </label>
              {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                <p className="text-red-400 mt-0">{formik.errors.taiKhoan}</p>
              )}
            </Component>

            <Component className="form-control mb-14">
              <input
                name="matKhau"
                value={formik.values.matKhau}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="text"
                onBlur={formik.handleBlur}
              />
              <label className="pb-4" htmlFor="">
                Mật khẩu
              </label>
              {formik.errors.matKhau && formik.touched.matKhau && (
                <p className="text-red-400 mt-0">{formik.errors.matKhau}</p>
              )}
            </Component>

            <Component className="form-control mb-14">
              <input
                name="hoTen"
                value={formik.values.hoTen}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="text"
                onBlur={formik.handleBlur}
              />
              <label className="pb-4" htmlFor="">
                Họ tên
              </label>
              {formik.errors.hoTen && formik.touched.hoTen && (
                <p className="text-red-400 mt-0">{formik.errors.hoTen}</p>
              )}
            </Component>
          </div>
          <div>
            <Component className="form-control mb-14">
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="text"
                onBlur={formik.handleBlur}
              />
              <label className="pb-4" htmlFor="">
                Email
              </label>
              {formik.errors.email && formik.touched.email && (
                <p className="text-red-400 mt-0">{formik.errors.email}</p>
              )}
            </Component>

            <Component className="form-control mb-14">
              <input
                name="soDT"
                value={formik.values.soDT}
                onChange={formik.handleChange}
                className="inputText"
                placeholder=" "
                type="number"
                onBlur={formik.handleBlur}
              />
              <label className="pb-4" htmlFor="">
                Số điện thoại
              </label>
              {formik.errors.soDT && formik.touched.soDT && (
                <p className="text-red-400 mt-0">{formik.errors.soDT}</p>
              )}
            </Component>
            <Component>
              <select
                name="maLoaiNguoiDung"
                value={formik.values.maLoaiNguoiDung}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="none">Vui lòng chọn loại người dùng</option>
                {danhSachLoaiNguoiDung.map((item, index) => (
                  <option value={item.maLoaiNguoiDung} key={index}>
                    {item.tenLoai}
                  </option>
                ))}
              </select>

              {formik.errors.maLoaiNguoiDung &&
                formik.touched.maLoaiNguoiDung && (
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
            // htmlType="submit"
            className="block ml-auto bg-blue-400 text-white px-5 py-3"
          >
            Thêm
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
  label,
  p {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 70px;
    pointer-events: none;
    user-select: none;
    transition: 0.3s ease;
    color: #999;
    font-size: 16px;
  }
  p {
    margin-top: 30px;
    color: #ff00009b;
  }
`;
