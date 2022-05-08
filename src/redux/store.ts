import { configureStore } from "@reduxjs/toolkit";
import { movieDetailSlice } from "./movieDetailSlice";
import { moviesSlice } from "./moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
