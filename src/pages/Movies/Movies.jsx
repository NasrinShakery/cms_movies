import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesFromServer } from "../../redux/moviesSlice";
import MovieCard from "../../components/MovieCard/MovieCard";

// import axios from 'axios'
// import { getMoviesFromServer } from '../../redux/services/movieApi';

const Movies = () => {
   const allMovies = useSelector((state) => state.movies);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMoviesFromServer());
   }, []);

   return (
      <div>
         <h2 className="font-MorabbaMedium text-2xl">همه فیلم ها</h2>
         <div className="moviesWrapper min-h-screen flex justify-center items-center py-5">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
               {console.log("page movies =>", allMovies)}
               {allMovies.map((movie) => (
                  // console.log(movie.name)
                  <MovieCard key={movie.id} {...movie} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Movies;
