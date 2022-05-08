import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../api/movies";
import { MovieList, SearchTypes } from "../types";

export const fetchMoviesData = createAsyncThunk(
  "movies/fetchMovies",
  async ({ s, type, page, year }: SearchTypes) => {
    const response = await fetchMovies({ s, type, page, year });

    return response.data;
  }
);

type MoviesState = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  data: MovieList;
};

const initialState = {
  data: { Search: [], totalResults: "0", Response: "false", Error: "" },
  loading: "idle",
} as MoviesState;

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesData.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchMoviesData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "succeeded";
    });
  },
});
