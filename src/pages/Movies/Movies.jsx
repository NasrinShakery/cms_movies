import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesFromServer } from '../../redux/moviesSlice';

// import axios from 'axios'
// import { getMoviesFromServer } from '../../redux/services/movieApi';

const Movies = () => {

  const allMovies = useSelector(state => state.movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesFromServer())
  },[]);

  return (
    <div>
      {
        console.log(allMovies)
      }
      Movies
      
    </div>
  )
}

export default Movies