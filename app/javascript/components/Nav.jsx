import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return(
    <div id='navbar'>
      <NavLink to="/">Search</NavLink>
      <span> / </span>
      <NavLink to="/favourite">Favourite</NavLink>
    </div>
  )
}

export default Nav
