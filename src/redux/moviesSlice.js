import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMoviesFromServer = createAsyncThunk(
   "movies/getMoviesFromServer",
   async () => {
      console.log("GET From url =>  https://65c1574edc74300bce8d9620.mockapi.io/movies");
      return axios
         .get("https://65c1574edc74300bce8d9620.mockapi.io/movies")
         .then((res) => res.data);
   }
);
export const addMoviesToServer = createAsyncThunk(
   "movies/addMoviesToServer",
   async (newmovie) => {
      return axios
         .post("https://65c1574edc74300bce8d9620.mockapi.io/movies", newmovie)
         .then((res) => res.data);
   }
);
export const deleteMoviesFromServer = createAsyncThunk(
   "movies/deleteMoviesFromServer",
   async (movieID) => {
      return axios
         .delete(
            `https://65c1574edc74300bce8d9620.mockapi.io/movies/${movieID}`
         )
         .then((res) => res.data);
   }
);
export const editMoviesFromServer = createAsyncThunk(
   "movies/editMoviesFromServer",
   async (newmovie) => {
      return axios
         .put(
            `https://65c1574edc74300bce8d9620.mockapi.io/movies/${newmovie.id}`,
            newmovie,{'Content-Type': 'application/json'}
         )
         .then((res) => {
            console.log('put: movi ID',newmovie.id);
            console.log('put: editedMovie',newmovie);
            console.log('res.data :', res.data);
            return res.data});
   }
);

const moviesSlice = createSlice({
   name: "movies",
   initialState: [],
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getMoviesFromServer.fulfilled, (state, action) => {
         console.log("GET => state:", state);
         console.log("GET => action:", action);
         console.log("GET Movie => action.payload:", action.payload);
         return action.payload;
      }),
      builder.addCase(addMoviesToServer.fulfilled, (state, action) => {
         state.push(action.payload);
      }),
      builder.addCase(deleteMoviesFromServer.fulfilled, (state, action) => {
         console.log("state =>", state);
         console.log("deleteMoviesFromServer => action.payload",action.payload);
         const newAllMovies = state.filter(
            (movie) => movie.id != action.payload.id
         );
         return newAllMovies;
      }),
      builder.addCase(editMoviesFromServer.fulfilled, (state, action) => {
         console.log("state =>", state);
         console.log(
            "**editMoviesFromServer => action.payload",
            action.payload
         );
         const updatedMovie = action.payload;
         const index = state.findIndex(
            (movie) => movie.id === updatedMovie.id
         );
         if (index !== -1) {
            state[index] = updatedMovie;
         }
      })
   },
});

export default moviesSlice.reducer;
