import { Link } from 'react-router-dom'
import React from 'react';



const Navbar = (props) => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/favorites'>Favorite Recipes</Link>
      <Link to='/login'>Login</Link>
    </nav>
  )
}

export default Navbar