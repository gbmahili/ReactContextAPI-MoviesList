import React, { useState, useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from './MovieContext';
const MovieList = () => {
   // Get access to the value that this component needs from the MovieContext
   const [movies, setMovies] = useContext(MovieContext);
   return (
      <div>
         {
            movies.map(movie => (
               <Movie key={movie.id} name={movie.name} price={movie.price} />
            ))
         }
      </div>
   );
}

export default MovieList;