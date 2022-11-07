import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getBookResult,
  useQuanLyNguoiDung,
} from "../../storeToolKit/quanLyNguoiDung";
import { HeartOutlined, DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import LogOut from "../../pages/login/LogOut";
import styled from "styled-components";
export const Header = () => {
  const { userLogin } = useQuanLyNguoiDung();
  const [user, setUser] = useState(false);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="p-4 bg-black bg-opacity-40  text-white fixed w-full z-10 header">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          to="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="	https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              className="flex items-center px-4 -mb-1 text-white font-medium "
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className="flex items-center px-4 -mb-1   text-white  font-medium "
              to="/news"
            >
              News
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className="flex items-center px-4 -mb-1   text-white  font-medium"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button
            className="self-center px-8 py-3
           "
          >
            {localStorage.getItem("USER_LOGIN") ? (
              <Component>
                <span
                  title="Click để xem thông tin"
                  onClick={() => {
                    navigate("/user");
                  }}
                >
                  <span className="text-red-600 ">
                    <HeartOutlined style={{ top: "-28px" }} />
                  </span>{" "}
                  Hi {userLogin.hoTen}
                  <span className="text-red-600 ">
                    <HeartOutlined style={{ top: "-28px" }} />
                  </span>{" "}
                </span>
                <span>
                  <span className="dropdown ">
                    <DownOutlined />

                    <div
                      className="dropdown-content"
                      onClick={() => {
                        localStorage.removeItem("USER_LOGIN");

                        setUser(!user);
                      }}
                    >
                      <p className="text-blue-500 mb-0 ">Log Out</p>
                    </div>
                  </span>
                </span>
              </Component>
            ) : (
              <NavLink to="login" className="text-white">
                Sign in
              </NavLink>
            )}
          </button>
          <button className="self-center px-8 py-3  ">
            <NavLink to="register" className="text-white">
              Sign up
            </NavLink>
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
const Component = styled.div`
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 8px 16px;
    z-index: 1;
    left: -80px;
    margin-top: 0px;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
export default Header;
