import React, {useState, createContext} from 'react';

// Instantiate the moviecontext
export const MovieContext = createContext();

// This component will provide the data.
export const MovieProvider = (props) => {
   const [movies, setMovies] = useState([
      {
         name: 'Harry Poter',
         price: '$10',
         id: 12341
      },
      {
         name: 'The Hobbits',
         price: '$19',
         id: 345237
      },
      {
         name: 'Lord of The Rings',
         price: '$21',
         id: 23233
      },
   ]);
   return(
      <MovieContext.Provider value={[movies,setMovies]}>
         {props.children}
      </MovieContext.Provider>
   )
}
