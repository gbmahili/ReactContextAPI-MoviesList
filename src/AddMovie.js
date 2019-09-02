import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';
const AddMovie = () => {
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [movies, setMovies] = useContext(MovieContext);
   const updateName = e => {
      setName(e.target.value);
   }
   const updatePrice = e => {
      setPrice(e.target.value);
   }

   const addMovie = e => {
      e.preventDefault();
      // Add information to global state
      console.log(name, price);
      setMovies(previousMovies => {
         setMovies([...movies, { name, price, id: movies[movies.length - 1].id + 1 }])
      })

   }
   return (
      <form onSubmit={addMovie}>
         <input style={styles.inputStyle} type='text' name='name' value={name} onChange={updateName} />
         <input style={styles.inputStyle} type='text' name='price' price={price} onChange={updatePrice} />
         <button style={styles.inputStyle}>Submit</button>
      </form>
   )
}

export default AddMovie;

const styles = {
   inputStyle: {
      height: 30,
      width: 200,
      border: '1px solid #444',
      margin: 5,
      padding:5
   }
}