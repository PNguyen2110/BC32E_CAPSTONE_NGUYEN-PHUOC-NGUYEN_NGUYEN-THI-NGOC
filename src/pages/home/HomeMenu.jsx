import React, { Fragment, useEffect } from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useQuanLyRap } from "../../storeToolKit/quanLyRap";
import { getRapMovieList } from "../../storeToolKit/quanLyRap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

const HomeMenu = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { rapList } = useQuanLyRap();

  useEffect(() => {
    dispatch(getRapMovieList());
  }, []);

  return (
    <>
      <Component className="container pt-16 pl-20">
        <Tabs
          // className="scrollRapChieu"
          tabPosition={tabPosition}
          items={rapList.map((item) => {
            return {
              label: (
                <img
                  className="rounded-full w-14 h-14"
                  src={item.logo}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https:picsum.photos/75/75";
                  }}
                  alt="..."
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
                          className="scrollRapChieu"
                          style={{
                            width: "450px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                          className="rounded-md"
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
                            <p className="text-black-500 ">({cumrap.diaChi})</p>
                            <p className="text-red-400">Detail</p>
                          </div>
                        </div>
                      ),
                      key: cumrap.tenCumRap,
                      children: (
                        <Tabs
                          className="scroll"
                          tabPosition={tabPosition}
                          items={cumrap.danhSachPhim.map((film, index) => {
                            return {
                              label: (
                                <Fragment>
                                  <div className=" width-[500px] pb-2">
                                    <div style={{ display: "flex" }}>
                                      <img
                                        src={film.hinhAnh}
                                        style={{
                                          width: "95px",
                                          height: "110px",
                                        }}
                                        alt={film.tenPhim}
                                        className="rounded-md"
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
                                                <button
                                                  onClick={() =>
                                                    navigate(
                                                      `/ticketroom/${lichChieu.maLichChieu}`
                                                    )
                                                  }
                                                  key={index}
                                                  className="text-1xl text-pink-500"
                                                >
                                                  {moment(
                                                    lichChieu.ngayChieuGioChieu
                                                  ).format("hh:mm A")}
                                                </button>
                                              );
                                            })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr style={{ width: "660px" }} />
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
  .scroll .ant-tabs-nav {
    width: 700px;
  }
  .ant-tabs-nav-list {
    height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
    display: inline-block;
  }

  /* .ant-tabs-nav-list .scroll {
    height: 800px;
    padding-left: 80px;
    display: inline-block;
    overflow: auto;
  } */

  .ant-tabs-nav-list::-webkit-scrollbar {
    width: 8px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .ant-tabs-nav-list::-webkit-scrollbar-track {
    max-height: 50%;
    height: 50%;
  }
  .ant-tabs-nav-list::-webkit-scrollbar-button {
    background-color: transparent;
    display: none;
  }
  .ant-tabs-nav-list::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-top: 80px solid #ec93d7;
    border-radius: 5px;
  }
`;
export default HomeMenu;
