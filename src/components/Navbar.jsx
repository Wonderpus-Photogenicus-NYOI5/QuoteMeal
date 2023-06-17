import { Link } from 'react-router-dom'
import React from 'react';



const Navbar = (props) => {
  return (
    <nav>
      <Link to='/' className='btn'>Home</Link>
      <Link to='/favorites' className='btn'>Favorite Recipes</Link>
      <Link to='/login' className='btn'>Login</Link>
    </nav>
  )
}

export default Navbar