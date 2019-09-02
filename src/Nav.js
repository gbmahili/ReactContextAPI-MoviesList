import React from 'react';

const Nav = ({ number }) => {
   return (
      <div style={styles.container}>
         <h3>Movie List</h3>
         <p>List of Movies {number}</p>
      </div>
   )
}

export default Nav;
const styles = {
   container: {
      display: 'flex',
      backgroundColor:'tan',
      padding:20,
      justifyContent: 'space-between',
      alignItems:'center',
      flexDirection: 'row',
      color:'white'
   }
}