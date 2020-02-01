import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return(
    <div id='navbar'>
      <NavLink to="/">SEARCH</NavLink>
      <span> | </span>
      <NavLink to="/favourite">FAVOURITE</NavLink>
    </div>
  )
}

export default Nav
