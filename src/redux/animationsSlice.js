import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAnimationsFromServer = createAsyncThunk(
   'animations.getAnimationsFromServer',
   async ()=>{
      return axios.get('https://65c1574edc74300bce8d9620.mockapi.io/animations')
      .then( res => res.data)
   }
)

const animationsSlice = createSlice({
   name: "animations",
   initialState: [],
   reducers: {},
   extraReducers: (builder) =>{
      builder.addCase(getAnimationsFromServer.fulfilled, (state, action)=>{
         console.log("GET => state:", state);
         console.log("GET => action:", action);
         console.log("GET Animations => action.payload:", action.payload);
         return action.payload;
      })
   }
})

export default animationsSlice.reducer;