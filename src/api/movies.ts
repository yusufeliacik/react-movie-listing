import axios from "axios";
import { SearchTypes } from "../types";

export const fetchMovies = ({ s, type, page, year }: SearchTypes) => {
  return axios.get("http://www.omdbapi.com/?apikey=c002fa2a", {
    params: {
      s,
      type,
      page,
      year,
    },
  });
};

export const fetchMovieDetail = (id: string) => {
  return axios.get("http://www.omdbapi.com/?apikey=c002fa2a", {
    params: {
      i: id,
    },
  });
};
