import React, { Fragment, useEffect } from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useQuanLyRap } from "../../storeToolKit/quanLyRap";
import { getRapMovieList } from "../../storeToolKit/quanLyRap";
import { Link } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const HomeMenu = () => {
  const [tabPosition, setTabPosition] = useState("left");

  const dispatch = useDispatch();
  const { rapList } = useQuanLyRap();
  console.log("rapList: ", rapList);

  useEffect(() => {
    dispatch(getRapMovieList());
  }, []);

  return (
    <>
      <Component className="container pt-16 ">
        <Tabs
          tabPosition={tabPosition}
          items={rapList.map((item) => {
            return {
              label: (
                <img
                  className="rounded-full w-14 h-14"
                  src={item.logo}
                  alt="..."
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https:picsum.photos/75/75";
                  }}
                />
              ),
              key: item.tenHeThongRap,
              children: (
                <Tabs
                  tabPosition={tabPosition}
                  items={item.lstCumRap.map((cumrap, index) => {
                    return {
                      label: (
                        <div
                          style={{
                            width: "300px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={cumrap.hinhAnh}
                            style={{ height: "80px", width: "60px" }}
                            alt=""
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https:picsum.photos/75/75";
                            }}
                          />
                          <div className="text-left ml-2 ">
                            <h2>{cumrap.tenCumRap}</h2>
                            <p className="text-black-500">({cumrap.diaChi})</p>
                            <p className="text-red-400">Detail</p>
                          </div>
                        </div>
                      ),
                      key: cumrap.tenCumRap,
                      children: (
                        <Tabs
                          className=" scroll"
                          tabPosition={tabPosition}
                          items={cumrap.danhSachPhim.map((film, index) => {
                            return {
                              label: (
                                <Fragment>
                                  <div className="my-5">
                                    <div style={{ display: "flex" }}>
                                      <img
                                        src={film.hinhAnh}
                                        style={{
                                          width: "95px",
                                          height: "110px",
                                        }}
                                        alt={film.tenPhim}
                                        className="rounded-sm"
                                        onError={(e) => {
                                          e.target.onerror = null;
                                          e.target.src =
                                            "https:picsum.photos/75/75";
                                        }}
                                      />
                                      <div className="ml-2">
                                        <h1 className=" text-2xl text-red-500 text-left">
                                          {film.tenPhim}
                                        </h1>
                                        <p className="text-left">
                                          {" "}
                                          <span className="text-blue-700">
                                            Xuat Chieu:
                                          </span>
                                        </p>

                                        <div className="grid grid-cols-6 gap-6">
                                          {film.lstLichChieuTheoPhim
                                            ?.slice(0, 12)
                                            .map((lichChieu, index) => {
                                              return (
                                                <Link
                                                  to="/"
                                                  key={index}
                                                  className="text-1xl text-pink-500"
                                                >
                                                  {moment(
                                                    lichChieu.ngayChieuGioChieu
                                                  ).format("hh:mm A")}
                                                </Link>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr style={{ width: "800px" }} />
                                </Fragment>
                              ),

                              key: film.maPhim,
                            };
                          })}
                        />
                      ),
                    };
                  })}
                />
              ),
            };
          })}
        />
      </Component>
    </>
  );
};

const Component = styled.div`
  .scroll {
    height: 800px;
    width: 700px;
    display: block;
    overflow: auto;
  }
  .scroll::-webkit-scrollbar {
    width: 5px;
    background-color: #fff;
  }

  .scroll::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .scroll::-webkit-scrollbar-button {
    /* width: 20px; */
    margin-bottom: 0;
    background-color: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    /* height: 20px; */
  }
`;

export default HomeMenu;
