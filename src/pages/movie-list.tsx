import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

import { MovieTypeSelectOptions } from "../common/constants";
import { Filter } from "../components/Filter";
import { Pagination } from "../components/Pagination";
import { Table } from "../components/Table";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMoviesData } from "../redux/moviesSlice";

import "react-loading-skeleton/dist/skeleton.css";

export const MovieList = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.movies);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({
    search: "pokemon",
    type: "",
    year: "",
  });

  useEffect(() => {
    dispatch(
      fetchMoviesData({
        s: filter.search,
        page: currentPage,
        type: filter.type,
        year: filter.year,
      })
    );
  }, [dispatch, currentPage, filter]);

  return (
    <div className="p-5">
      <MovieListStyled>
        <Filter
          searchValue={filter.search}
          typeValue={filter.type}
          yearValue={filter.year}
          setSearch={(e) => setFilter((state) => ({ ...state, search: e }))}
          setYear={(e) => setFilter((state) => ({ ...state, year: e }))}
          setType={(e) => setFilter((state) => ({ ...state, type: e }))}
          typeOptions={MovieTypeSelectOptions}
        />
        {selector.loading !== "succeeded" && selector.loading !== "failed" && (
          <Skeleton count={10} />
        )}
        {!selector.data.Error ? (
          <>
            <Table
              header={["", "TITLE", "YEAR", "IMDBID"]}
              trComp={selector.data.Search.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="highlighted"
                    onClick={() => navigate(`/movie-detail/${item.imdbID}`)}
                  >
                    <td>
                      <img src={item.Poster} alt="Poster" width={100} />
                    </td>
                    <td>{item.Title}</td>
                    <td>{item.Year}</td>
                    <td>{item.imdbID}</td>
                  </tr>
                );
              })}
            />
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalCount={Number(selector.data.totalResults)}
            />
          </>
        ) : (
          <MovieErrorStyled>{selector.data.Error}</MovieErrorStyled>
        )}
      </MovieListStyled>
    </div>
  );
};

export const MovieListStyled = styled.div`
  width: 100%;
  border-spacing: 15px;
  box-shadow: 0 0 10px;
  border-radius: 30px;
  padding: 30px;
`;

export const MovieErrorStyled = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: red;
  text-align: center;
  margin-top: 10px;
`;
