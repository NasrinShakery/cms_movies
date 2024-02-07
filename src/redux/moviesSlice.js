import {createAsyncThunk ,createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getMoviesFromServer = createAsyncThunk(
   "movies/getMoviesFromServer",
   async () => {
      console.log('url=> ...');
      return axios.get('https://65c1574edc74300bce8d9620.mockapi.io/movies')
      .then(res => res.data)
   }
)
export const addMoviesToServer = createAsyncThunk(
   "movies/addMoviesToServer",
   async (newmovie) => {
      return axios.post('https://65c1574edc74300bce8d9620.mockapi.io/movies',newmovie)
      .then(res => res.data)
   }
)
export const deleteMoviesFromServer = createAsyncThunk(
   "movies/deleteMoviesFromServer",
   async (movieID) => {
      return axios.delete(`https://65c1574edc74300bce8d9620.mockapi.io/movies/${movieID}`)
      .then(res => res.data)
   }
)

const moviesSlice = createSlice({
   name: 'movies',
   initialState: [],
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getMoviesFromServer.fulfilled, (state, action) =>{
         console.log('get => state:',state);
         console.log('get => action:',action);
         console.log('get => action.payload:',action.payload);
         // state.push(...action.payload)
         return action.payload
      }),
      builder.addCase(addMoviesToServer.fulfilled, (state, action) =>{
         state.push(action.payload);
      }),
      builder.addCase(deleteMoviesFromServer.fulfilled, (state, action) =>{
         // state.push(...action.payload);
         console.log('state =>', state);
         console.log('deleteMoviesFromServer => action.payload', action.payload);

         const newAllMovies = state.filter(movie => movie.id != action.payload.id);
         return newAllMovies
      })
   } 
})

export default moviesSlice.reducer;