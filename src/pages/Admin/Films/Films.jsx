import React, { useEffect, useRef, useState } from "react";
import { Button, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { deleteFilm, getMovieList } from "../../../storeToolKit/quanLiPhim";
import { useQuanLiPhim } from "../../../storeToolKit/quanLiPhim";
import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "antd";

export const Films = () => {
  const { t } = useTranslation();
  const { Search } = Input;
  const { movieList } = useQuanLiPhim();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      // sortDirections: ["descend"],
      sortDirections: ["descend", "ascend"],
      defaultSortOrder: "descend",
      width: "10%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      width: "15%",
      render: (img) => {
        
        return (
          <>
            <img style={{ width: 60 }} src={img} alt={img.hinhAnh} />
          </>
        );
      },
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: "20%",
      sorter: (a, b) => a.tenPhim - b.tenPhim,
      order: "descend",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      width: "40%",
      render: (moTa) => {
        return (
          <>
            <p>{moTa.length > 50 ? moTa.substring(0, 50) + "..." : moTa}</p>
          </>
        );
      },
    },
    {
      title: "Thao Tác",
      dataIndex: "thaoTac",
      render: (text, films) => {
        return (
          <div key={Date.now()}>
            <NavLink
              key={1}
              className="text-2xl mr-4 "
              to={`/admin/editFilms/${films.maPhim}`}
            >
              <button title="Edit">
                <EditOutlined />
              </button>
            </NavLink>

            <button
              title="delete"
              onClick={() => {
                dispatch(deleteFilm(films.maPhim));
                // navigate("/admin");
              }}
              className="text-red-500 text-2xl"
            >
              <DeleteOutlined />
            </button>

            <button
              onClick={() =>
                navigate(`/admin/showTime/${films.maPhim}/${films.tenPhim}`)
              }
              title="calendar"
              className="text-green-400 text-2xl ml-3"
            >
              <CalendarOutlined />
            </button>
          </div>
        );
      },
    },
  ];
  const data = movieList;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value) => {
    dispatch(getMovieList(value));
  };

  return (
    <div>
      <h3 className="text-3xl">{t("moviemanager")}</h3>
      <Button onClick={() => navigate("/admin/addFilms")} className="mb-5">
        {t("addmovie")}
      </Button>
      <Search
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        onSearch={onSearch}
        allowClear
      />
      <Table
        rowKey={"maPhim"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
};
