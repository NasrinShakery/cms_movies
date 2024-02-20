import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAnimationsFromServer = createAsyncThunk(
   'animations.getAnimationsFromServer',
   async ()=>{
      return axios.get('https://65c1574edc74300bce8d9620.mockapi.io/animations')
      .then( res => res.data)
   }
)
export const postAnimationToServer = createAsyncThunk(
   'animations.postAnimationToServer',
   async (newAnimation) => {
      return axios.post('https://65c1574edc74300bce8d9620.mockapi.io/animations',newAnimation)
      .then(res => res.data)
   }
)
export const deleteAnimationFromServer = createAsyncThunk(
   'animations.deleteAnimationFromServer',
   async (animationID) => {
      return axios.delete(`https://65c1574edc74300bce8d9620.mockapi.io/animations/${animationID}`)
      .then(res => res.data)
   }
)
export const editAnimationFromServer = createAsyncThunk(
   'animations.editAnimationFromServer',
   async (editedAnimation) => {
      return axios.put(`https://65c1574edc74300bce8d9620.mockapi.io/animations/${editedAnimation.id}`, editedAnimation)
      .then(res => res.data)
   }
)


const animationsSlice = createSlice({
   name: "animations",
   initialState: [],
   reducers: {},
   extraReducers: (builder) =>{
      builder.addCase(getAnimationsFromServer.fulfilled, (state, action)=>{
         // console.log("GET => state:", state);
         // console.log("GET => action:", action);
         console.log("GET Animations => action.payload:", action.payload);
         return action.payload;
      }),
      builder.addCase(postAnimationToServer.fulfilled, (state, action)=>{
         state.push(action.payload);
      }),
      builder.addCase(deleteAnimationFromServer.fulfilled, (state, action)=>{
         const newAllAnimations = state.filter(
            (animation) => animation.id != action.payload.id
         );
         return newAllAnimations;
      }),
      builder.addCase(editAnimationFromServer.fulfilled, (state, action)=>{
         const updatedAnimation = action.payload;
         const index = state.findIndex(
            (movie) => movie.id === updatedAnimation.id
         );
         if (index !== -1) {
            state[index] = updatedAnimation;
         }
      })
   }
})

export default animationsSlice.reducer;