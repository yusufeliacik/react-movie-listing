import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "../api/movies";
import { Movie } from "../types";

export const fetchMovieData = createAsyncThunk(
  "movie/fetchMovieDetail",
  async (id: string) => {
    const response = await fetchMovieDetail(id);

    return response.data;
  }
);

type MoviesState = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  data: Movie;
};

const initialState = {
  data: { Title: "", Year: "", imdbID: "", Type: "", Poster: "" },
  loading: "idle",
} as MoviesState;

export const movieDetailSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieData.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchMovieData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = "succeeded";
    });
  },
});
