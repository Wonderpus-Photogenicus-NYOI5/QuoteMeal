import { Link } from 'react-router-dom'
import React from 'react';
import { useSelector } from 'react-redux';


const Navbar = (props) => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  return (
    <nav className='my-5'>
      <Link to='/' className='btn w-50'>Home</Link>
      {loggedIn && <Link to='/favorites' className='btn w-50'>Favorite Recipes</Link>}
      <Link to='/login' className='btn w-50'>Login</Link>
    </nav>
  )
}

export default Navbar;