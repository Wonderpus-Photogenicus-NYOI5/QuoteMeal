import { Link } from 'react-router-dom'
import React from 'react';



const Navbar = (props) => {
  return (
    <nav className='my-5'>
      <Link to='/' className='btn w-50'>Home</Link>
      <Link to='/favorites' className='btn w-50'>Favorite Recipes</Link>
      <Link to='/login' className='btn w-50'>Login</Link>
    </nav>
  )
}

export default Navbar