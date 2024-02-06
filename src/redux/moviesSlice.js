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

const moviesSlice = createSlice({
   name: 'movies',
   initialState: [],
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getMoviesFromServer.fulfilled, (state, action) =>{
         // console.log('state:',state);
         // console.log('action:',action.payload);
         state.push(...action.payload);
      }),
      builder.addCase(addMoviesToServer.fulfilled, (state, action) =>{
         // state.push(...action.payload);
         console.log('state =>', state);
         console.log('addMoviesToServer => action.payload', action.payload);
      })
   } 
})

export default moviesSlice.reducer;