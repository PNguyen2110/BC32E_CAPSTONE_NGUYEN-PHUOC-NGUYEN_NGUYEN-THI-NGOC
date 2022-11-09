import React, { Fragment, useEffect } from "react";
import { Tabs } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useQuanLyRap } from "../../storeToolKit/quanLyRap";
import { getRapMovieList } from "../../storeToolKit/quanLyRap";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HomeMenu = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { rapList } = useQuanLyRap();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getRapMovieList());
  }, []);

  return (
    <>
      <Component className="lg:container px-0  pt-16 lg:px-12 xl:px-14 sm:pl-[80px] ">
        <Tabs
          tabPosition={tabPosition}
          items={rapList.map((item) => {
            return {
              label: (
                <img
                  className="rounded-full  w-8 h-8   lg:w-14 h-14"
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
                        <div className="flex-col md:flex-row w-[150px] items-start scrollRapChieu sm:pl-0 md:w-[250px] lg:w-[300px] xl:w-[320px] flex md:items-center">
                          <img
                            className="rounded-md inline-block"
                            src={cumrap.hinhAnh}
                            style={{ height: "85px", width: "65px" }}
                            alt=""
                            onError={(e) => {
                              e.target.onerror = null;
                              // e.target.src = "https:picsum.photos/75/75";
                            }}
                          />
                          <div className="text-left pl-0  md:pl-2">
                            <h2 class="tenCumRap">{cumrap.tenCumRap}</h2>
                            <p className="text-black-500 diaChiCumRap h-[65px] xl:h-[45px] mb-2">
                              ({cumrap.diaChi})
                            </p>
                            <p className="text-red-400">{t("detail")}</p>
                          </div>
                        </div>
                      ),
                      key: cumrap.tenCumRap,
                      children: (
                        <Tabs
                          className="scroll "
                          tabPosition={tabPosition}
                          items={cumrap.danhSachPhim.map((film, index) => {
                            return {
                              label: (
                                <Fragment>
                                  <div className=" scroll-lichChieu  pb-2 pr-0 w-[180px] md:pr-2 md:w-[250px] lg:w-[400px] xl:w-[600px]  ">
                                    <div className="flex  flex-wrap: wrap flex-col md:flex-row">
                                      <img
                                        src={film.hinhAnh}
                                        alt={film.tenPhim}
                                        className="rounded-md w-[70px] h-[70px]  md:h-[80px] ld:w-[100px] lg:h-[110px] xl:w-[120px] xl:h-[130px]"
                                        onError={(e) => {
                                          e.target.onerror = null;
                                          e.target.src =
                                            "https:picsum.photos/75/75";
                                        }}
                                      />
                                      <div className="ml-0 md:ml-2">
                                        <h1 className="tenPhim md:h-[70px] mb-3 md:w-[12rem] xl:w-[20rem] text-2xl text-red-500 text-left">
                                          {film.tenPhim}
                                        </h1>
                                        <p className="text-left mt-2 mb-0">
                                          {" "}
                                          <span className="text-blue-700">
                                            {t("showtime")}:
                                          </span>
                                        </p>

                                        <div className="lichChieu grid text-left grid-cols-1 md:grid-cols-2 h-7 lg:grid-cols-3 xl:grid-cols-6 md:gap-0 lg:gap-4 lg:gap-y-1 xl:gap-x-6 xl:gap-y-1">
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
                                                  className="text-1xl text-pink-500 w-14"
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
                                  <hr className="w-12" />
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
  .tenCumRap,
  .diaChiCumRap {
    white-space: normal;
    word-break: break-word;
    -webkit-line-clamp: 3;
    height: 45px;
    margin-bottom: 0;
    word-wrap: wrap;
  }
  .tenPhim {
    /* max-width: 15.625rem; */
    white-space: normal;
    word-break: break-word;
    -webkit-line-clamp: 3;
    height: 25px;
    /* margin-bottom: 0; */
    word-wrap: wrap;
    line-height: 1;
    /* margin-bottom: 20px; */
  }
  .tenCumRap {
    width: 200px;
  }
  .scroll .ant-tabs-nav {
    max-width: 650px;
  }
  .ant-tabs-nav-list {
    height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    display: inline-block;
  }
  .lichChieu::-webkit-scrollbar,
  .ant-tabs-nav-list::-webkit-scrollbar {
    width: 8px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .lichChieu::-webkit-scrollbar,
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
  .lichChieu {
    height: 50px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .scroll .lichChieu::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 50%;
    border-top: 15px solid #ec93d7;
  }
`;
export default HomeMenu;
