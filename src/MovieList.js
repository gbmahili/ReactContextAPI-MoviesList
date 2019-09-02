import React, {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
   const [movies, setMovies] = useState([
      {
         name:'Harry Poter',
         price:'$10',
         id:12341
      },
      {
         name:'The Hobbits',
         price:'$19',
         id:12341
      },
      {
         name:'Lord of The Rings',
         price:'$21',
         id:12341
      },
   ]);
   return (
      <div>
      {
         movies.map(movie => (
            <Movie name={movie.name} price={movie.price}/>
         ))
      }
      </div>
   );
}

export default MovieList;