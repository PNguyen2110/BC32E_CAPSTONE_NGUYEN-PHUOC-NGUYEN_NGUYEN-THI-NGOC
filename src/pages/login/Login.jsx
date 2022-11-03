import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  postUser,
  useQuanLyNguoiDung,
} from "../../storeToolKit/quanLyNguoiDung";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogin } = useQuanLyNguoiDung();

  console.log("userLogin: ", userLogin);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields },
    setValue,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {},
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("USER_LOGIN"));
    if (
      localStorage.getItem("USER_LOGIN") &&
      user.maLoaiNguoiDung === "KhachHang"
    ) {
      navigate(-1);
    } else if (
      localStorage.getItem("USER_LOGIN") &&
      user.maLoaiNguoiDung === "QuanTri"
    ) {
      navigate("/admin");
    }
  }, [userLogin]);
  return (
    <div className=" pt-32 pb-12 bg-pink-200 bg-opacity-60">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 container">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-white">Sign in</h1>
          <p className="text-sm dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          noValidate
          action
          className="space-y-12 ng-untouched ng-pristine ng-valid "
          onSubmit={handleSubmit((data) => {
            dispatch(postUser(data));
          })}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                userName
              </label>
              <input
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                placeholder="taiKhoan"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                {...register("taiKhoan", {
                  required: "khong dc bo trong",
                })}
              />
              {errors?.taiKhoan?.type === "required" && (
                <p className="text-danger  text-red-600">Không được bỏ trống</p>
              )}
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="matKhau"
                id="matKhau"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                {...register("matKhau", {
                  required: "khong dc bo trong",
                })}
              />
              {errors?.matKhau?.type === "required" && (
                <p className="text-danger  text-red-600">Không được bỏ trống</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900 transition hover:bg-pink-500 hover:text-black"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Don't have an account yet?
              <Link
                rel="noopener noreferrer"
                to="#"
                className="hover:underline dark:text-violet-400 pl-2"
                onClick={() => navigate(`/register`)}
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
