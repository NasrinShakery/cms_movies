import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import animationsReduser from "./animationsSlice";

export const store = configureStore({
   reducer: {
      movies: moviesReducer,
      animations: animationsReduser,
   },
});
