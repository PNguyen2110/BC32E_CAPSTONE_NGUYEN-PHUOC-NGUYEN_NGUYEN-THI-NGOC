import React from "react";
import { NavLink } from "react-router-dom";
import { useQuanLyNguoiDung } from "../../storeToolKit/quanLyNguoiDung";
import { HeartOutlined } from "@ant-design/icons";
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';

export const Header = () => {

  const { t, i18n } = useTranslation();
  const handleChange = (value) => {
    i18n.changeLanguage(value)
  };

  const { userLogin } = useQuanLyNguoiDung();

  return (
    <header className="p-4 bg-black bg-opacity-40  text-white fixed w-full z-10 header">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="	https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              className="flex items-center px-4 -mb-1 text-white font-medium "
              to="/home"
            >
               {t('home')}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className="flex items-center px-4 -mb-1   text-white  font-medium "
              to="/news"
            >
               {t('news')}
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              className="flex items-center px-4 -mb-1   text-white  font-medium"
              to="/contact"
            >
               {t('contact')}
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 ">
            {localStorage.getItem("USER_LOGIN") ? (
              <span>
                <span className="text-red-600 ">
                  <HeartOutlined style={{ top: "-28px" }} />
                </span>{" "}
                {t('hi')} {userLogin.hoTen}{" "}
                <span className="text-red-600 ">
                  <HeartOutlined style={{ top: "-28px" }} />
                </span>{" "}
              </span>
            ) : (
              <NavLink to="login" className="text-white">
                {t('signin')}
              </NavLink>
            )}
          </button>
          <button className="self-center px-8 py-3  ">
            <NavLink to="register" className="text-white">
              {t('signup')}
            </NavLink>
          </button>

          <Select
            defaultValue="en"
            style={{
              width: 100,
              color: 'red',
              borderRadius: '5px',
            }}
            onChange={handleChange}
            options={[
              {
                value: 'en',
                label: 'English',
              },
              {
                value: 'vi',
                label: 'Việt Nam',
              },
              {
                value: 'chi',
                label: 'Trung Quốc',
              },
            ]}
          />
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

export default Header;
