// import React from 'react'
import AddMovieModal from "../AddMovieModal/AddMovieModal"
import { getMoviesFromServer } from "../../redux/moviesSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const RecentBox = () => {
   const dispatch = useDispatch();
   const allMovies = useSelector(state => state.movies)
   useEffect(() =>{
      dispatch(getMoviesFromServer());
   },[])
  return (
    <div className="w-full p-4 space-y-3 rounded-3xl bg-blueSpace-dark text-white">
      <div className="flex items-center justify-between gap-4 font-MorabbaMedium tracking-wider">
         <h4 className="">آخرین فیلم ها</h4>
         <AddMovieModal/>
      </div>
      <div className="px-5 py-1 flex items-center justify-between text-base font-MorabbaLight tracking-wider font-black bg-blueSpace/60 rounded-[10px]">
         <div className="">
            <span className="ml-2">پوستر</span>
            <span>عنوان</span>
         </div>
         <span>تاریخ ایجاد</span>
      </div>
      {allMovies.length && allMovies.map( movie => (
         <>
            <div className="flex justify-between items-center px-5 py-1 bg-cornflowerBlue-dark/65 rounded-[10px]">
               <div className="flex items-center justify-between gap-4">
                  <img className="w-12 h-16 rounded-lg" src={`./images/moviePosters/${movie.moviePoster}.jpg`} alt="" />
                  <span>{movie.movieName}</span>
               </div>
               <span>{movie.movieYear}</span>
            </div>
         </>
      ))}
   
    </div>
  )
}

export default RecentBox