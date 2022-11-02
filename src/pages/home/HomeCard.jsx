import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import cn from "classnames";
import { useQueryUrl } from "../../Hooks/useQueryUrl";
import { getMovieList } from "../../storeToolKit/quanLiPhim/quanLiPhimReducer";
import { useQuanLiPhim } from "../../storeToolKit/quanLiPhim/quanLiPhimSelector";
import MultipleRowSlick from "./MultipleRowSlick";

const HomeCard = () => {
  const dispatch = useDispatch();

  const [query, setQueryUrl] = useQueryUrl({
    isShowing: true,
  });

  const { movieList } = useQuanLiPhim();
  console.log("movieList: ", movieList);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  return (
    <div className="container">
      <div className="mt-10 mb-5 text-white ml-24">
        <Button
          type="button"
          className={cn({ active: query.isShowing === "true" })}
          onClick={() => {
            setQueryUrl({
              isShowing: true,
            });
          }}
        >
          Available{" "}
        </Button>
        <Button
          type="button"
          className={cn("ml-4", { active: query.isShowing === "false" })}
          onClick={() => {
            setQueryUrl({
              isShowing: false,
            });
          }}
        >
          Coming soon
        </Button>
      </div>

      <MultipleRowSlick movieList={movieList} query={query.isShowing} />
    </div>
  );
};

export default HomeCard;

const Button = styled.button`
  padding: 12px 30px;
  border: 2px solid #bf5f82;
  background-color: transparent;
  border-radius: 6px;
  color: black;
  transition: all 0.3s;
  font-weight: 500;
  &:hover {
    box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  }

  &.active {
    background-color: #ffc1e3;
    color: black;
  }
`;
