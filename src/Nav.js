import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
   const [movies] = useContext(MovieContext)
   return (
      <div style={styles.container}>
         <h3>Movie List</h3>
         <p>List of Movies {movies.length}</p>
      </div>
   )
}

export default Nav;
const styles = {
   container: {
      display: 'flex',
      backgroundColor: '#444',
      padding: 20,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      color: 'white'
   }
}